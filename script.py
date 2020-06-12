import requests
import os,re,sys
import json


def main():
    a_list_of_movies = ["Back to the Future","Desperado"," Night at the Museum"," Robocop"," Ghostbusters","Cool World"," Donnie Darko"," Double Indemnity"," The Spanish Prisoner"," The Smurfs"," Dead Alive"," Army of Darkness"," Peter Pan"," The Jungle Story"," Red Planet"," Deep Impact"," The Long Kiss Goodnight"," Juno"," (500) Days of Summer"," The Dark Knight"," Bringing Down the House"," Se7en"," Chocolat"," The American"," The American President"," Hudsucker Proxy"," Conan the Barbarian"," Shrek"," The Fox and the Hound"," Lock"," Stock"," and Two Barrels"," Date Night"," 200 Cigarettes"," 9 1/2 Weeks"," Iron Man 2"," Tombstone"," Young Guns"," Fight Club"," The Cell"," The Unborn"," Black Christmas"," The Change-Up"," The Last of the Mohicans"," Shutter Island"," Ronin"," Ocean’s 11"," Philadelphia"," Chariots of Fire"," M*A*S*H"," Walking and Talking"," Walking Tall"," The 40 Year Old Virgin"," Superman III"," The Hour"," The Slums of Beverly Hills"," Secretary"," Secretariat"," Pretty Woman"," Sleepless in Seattle"," The Iron Mask"," Smoke"," Schindler’s List"," The Beverly Hillbillies"," The Ugly Truth"," Bounty Hunter"," Say Anything"," 8 Seconds"," Metropolis"," Indiana Jones and the Temple of Doom"," Kramer vs. Kramer"," The Manchurian Candidate","29 Raging Bull"," Heat"," About Schmidt"," Re-Animator"," Evolution"," Gone in 60 Seconds"," Wanted"," The Man with One Red Shoe"," The Jerk"," Whip It"," Spanking the Monkey"," Steel Magnolias"," Horton Hears a Who"," Honey"," Brazil"," Gorillas in the Mist"," Before Sunset"," After Dark"," From Dusk til Dawn"," Cloudy with a Chance of Meatballs"," Harvey"," Mr. Smith Goes to Washington"," L.A. Confidential"," Little Miss Sunshine"," The Future"," Howard the Duck"," Howard’s End"," The Innkeeper"," Revolutionary Road"]

    base_url = "http://www.omdbapi.com/?apikey=9af3c311&t="
    data = list()
    for movie in a_list_of_movies:
        movie_url = movie.strip()
        movie_url = re.sub(" ", "+", movie_url)
        full_url = base_url+movie_url
        r = requests.get(full_url)
        
        data.append(r.json())

    with open("dummy.json", "w") as out:
        json.dump(data, out)



main()