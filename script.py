import requests
import os,re,sys
import json


def main():
    a_list_of_movies = ["Castle in the sky", "Blade Runner", "Star Wars", "Sharknado", "Interstellar"]
    base_url = "http://www.omdbapi.com/?apikey=9af3c311&t="
    data = list()
    for movie in a_list_of_movies:
        movie_url = re.sub(" ", "+", movie)
        full_url = base_url+movie_url
        r = requests.get(full_url)
        
        data.append(r.json())

    with open("dummy.json", "w") as out:
        json.dump(data, out)



main()