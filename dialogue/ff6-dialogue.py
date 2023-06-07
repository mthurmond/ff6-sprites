import pandas as pd
import json

# update pickle file with latest excel
dialogue = pd.read_excel('ff6-script.xlsx')
dialogue.to_pickle('ff6-dialogue.pkl')

# create and format dialogue df
dialogue = pd.read_pickle('ff6-dialogue.pkl')
# remove "original" column
dialogue = dialogue[[
    'Scene',
    'Character',
    'Dialogue',
    'Wordcount'
]]
dialogue = dialogue.sort_values(by='Character')

# calculate interesting summary data
def summary_metrics():
    # number of speaking characters
    totalchars = dialogue.Character.nunique()

    # all unique chars
    speakingchars = dialogue['Character'].unique()

    # group by most times characters speak
    speaksup = dialogue.groupby(['Character'])[["Dialogue"]].count()
    speaksup = speaksup.sort_values(by='Dialogue', ascending=False)

    # who says the most words? 
    longwinded = dialogue.groupby(['Character'])[["Wordcount"]].sum()
    longwinded = longwinded.sort_values(by='Wordcount', ascending=False)

# get dialogue stats
def get_dialogue(person):
    character = dialogue.sort_values(by='Character')
    character = dialogue[
        (dialogue['Character'] == person)
    ]
    character = character.sort_index()
    times_spoken_df = character.groupby(['Character'])[["Dialogue"]].count()
    times_spoken = times_spoken_df['Dialogue'].values[0].item()

    words_spoken_df = character.groupby(['Character'])[["Wordcount"]].sum()
    words_spoken = words_spoken_df['Wordcount'].values[0].item()

    # a Python object (dict):
    speaking_info = {
        "times": times_spoken,
        "words": words_spoken
    }

    # convert into JSON:
    speaking_info_json = json.dumps(speaking_info)

    return speaking_info_json

# get list of all scenes a character speaks in
def get_scenes(person):
    character_dialogue = dialogue[
        (dialogue['Character'] == person)
    ]
    scenes_group = character_dialogue.groupby(['Scene'])[['Scene']].count()
    scenes = list(scenes_group.index)
    return scenes

def get_scene_dialogue(person):
    # print dialog for each scene
    scenes = get_scenes(person)
    scene_dialogue_list = []
    for scene in scenes:
        scene_dialogue = dialogue[
            (dialogue['Scene'] == scene)
        ]
        scene_dialogue = scene_dialogue[[
            'Scene',
            'Character',
            'Dialogue'
        ]]
        # add dataframes to an array
        scene_dialogue_list.append(scene_dialogue)
    return scene_dialogue_list

person = "Gogo"
scene_dialogue_list = get_scene_dialogue(person)
# print(scene_dialogue_list)

char_speaking_info = get_dialogue(person)
# Writing to sample.json
with open("../public/dialogue/gogo.json", "w") as outfile:
    outfile.write(char_speaking_info)

# char_passed = sys.argv[1]
# char_speaking_info = get_dialogue(char_passed)
# print(char_speaking_info)

# dialogue_json = dialogue.to_json()
# print(dialogue_json)

# filter dialogue to only show scenes in list
scenes = get_scenes(person)

filtered_df = dialogue[dialogue['Scene'].isin(scenes)]
scenes_json = filtered_df.to_json()

scene_dialogue_list = []

def get_initial_scene():
    scenes = get_scenes(person)
    for scene in scenes:
        scene_dialogue = dialogue[
            (dialogue['Scene'] == scene)
        ]
        scene_dialogue = scene_dialogue[[
            'Scene',
            'Character',
            'Dialogue'
        ]]
        result = scene_dialogue.to_json(orient="split")
        # parsed = json.loads(result)
        with open("../public/dialogue/gogo-scene.json", "w") as outfile:
            outfile.write(result)

        return result

firstscene = get_initial_scene()