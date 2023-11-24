from fastapi import FastAPI, HTTPException, Body, File, UploadFile, Depends
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import json
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from apiclient.discovery import build

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000"
]

# CORS MIDDLEWARE
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Userdata Class
class UserData(BaseModel):
    access_token: str
    apiKey: str
    numOutputs: int

# QueryData Class, can be used to add more query parameters
class QueryData(BaseModel):
    query: str

# Data for the video data, can be used to add more video details
class VideoData(BaseModel):
    title: str
    description: str
    thumbnail: str
    videoUrl: str

# Stores the user data, such as the OAuth, API key, and the number of outputs
@app.post('/store_user_data')
async def store_user_data(user_data: UserData = Body(...)):
    try:
        # Validate and process the data as needed
        access_token = user_data.access_token
        apiKey = user_data.apiKey
        numOutputs = user_data.numOutputs


        # Store the data in a JSON file
        user_data_dict = {
            'access_token': access_token,
            'apiKey': apiKey,
            'numOutputs': numOutputs,
        }

        with open('userdata.json', 'w') as json_file:
            json.dump(user_data_dict, json_file, indent=2)

        return {'success': True}

    except Exception as e:
        print(f"Error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")
    
# Stores the query parameter, could be used to store more query details
@app.post('/store_config_data')
async def store_config_data(query_data: QueryData = Body(...)):
    try:
        # Validate and process the data as needed
        query = query_data.query


        # Store the data in a JSON file
        config_data_dict = {
            'query' : query,
        }

        with open('configdata.json', 'w') as json_file:
            json.dump(config_data_dict, json_file, indent=2)

        return {'success': True}

    except Exception as e:
        print(f"Error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")
    
# Execute the youtube search using the details stored in JSON files
@app.put("/youtube-search")
async def youtube_search():
    with open("userdata.json", "r") as f:
        data = json.load(f)
        DEV_KEY = data['apiKey']
        max_results = data['numOutputs']
    with open("configdata.json", "r") as f:
        data = json.load(f)
        query = data['query']

    YOUTUBE_API_SERVICE_NAME = 'youtube'
    YOUTUBE_API_VERSION = 'v3'

    # Youtube resource object
    youtube_object = build(YOUTUBE_API_SERVICE_NAME, YOUTUBE_API_VERSION, developerKey=DEV_KEY)

    # Perform the search request
    search_response = youtube_object.search().list(q=query, part="id, snippet", maxResults=max_results).execute()
    
    # Extract the items from the response
    items = search_response.get("items", [])
    
    # Initialize empty lists for each item type
    videos = []
    playlists = []
    channels = []
    
    # Loop over each item and add it to the appropriate list based on its kind
    for item in items:
        if item['id']['kind'] == "youtube#video":
            videos.append({
                "title": item["snippet"]["title"],
                "videoId": item['id']['videoId'],
                "description": item['snippet']['description'],
                "thumbnailUrl": item['snippet']['thumbnails']['high']['url'],
                "videoUrl": f'https://youtube.com/watch?v={item["id"]["videoId"]}'
            })
        elif item['id']['kind'] == "youtube#playlist":
            playlists.append({
                "title": item["snippet"]["title"],
                "playlistId": item['id']['playlistId'],
                "description": item['snippet']['description'],
                "thumbnailUrl": item['snippet']['thumbnails']['high']['url']
            })
        elif item['id']['kind'] == "youtube#channel":
            channels.append({
                "title": item["snippet"]["title"],
                "channelId": item['id']['channelId'],
                "description": item['snippet']['description'],
                "thumbnailUrl": item['snippet']['thumbnails']['high']['url']
            })
    
    # Save the lists to a JSON file
    with open("output.json", "w") as f:
        json.dump([{"videos": videos}, {"playlists": playlists}, {"channels": channels}], f, indent=4)
    
    return {"message": "YouTube search completed successfully"}

# Function for getting the videos
@app.get("/videos", response_model = List[dict])
def get_videos():
    with open("output.json", "r") as f:
        data = json.load(f)
        videos = data[0]["videos"]
    return videos

