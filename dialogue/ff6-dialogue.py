import pandas as pd

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
    times_spoken = times_spoken_df['Dialogue'].values[0]

    words_spoken_df = character.groupby(['Character'])[["Wordcount"]].sum()
    words_spoken = words_spoken_df['Wordcount'].values[0]

    return times_spoken, words_spoken

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

person = "Terra"
scene_dialogue_list = get_scene_dialogue(person)
print(scene_dialogue_list)

char_speaking_info = get_dialogue(person)
print(f"\n\n{person} speaks {char_speaking_info[0]} times with {char_speaking_info[1]} total words.\n\n")