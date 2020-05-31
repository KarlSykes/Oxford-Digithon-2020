# Messaging Protocol
## Date Format
The date is gonna passed around alot in the json messaging so it should have a consistent format:

DD-MM-YYYY

## Store Moods
When the user selects tags for the day, the JSON mesaage should be in the following format:

```markdown
{
    date: dateFormat,
    username: username,
    type: "storeMoods",
    tags: [Moods, Moods,....Moods]
}
```

##Store Activities

When the user selects activities for the day, the JSON message should be in the following format:

```markdown
{
    date: dateFormat,
    username: username,
    type: "storeActivities",
    activities: [activity, activity,....activity]
}
```

##Store Grateful List

When the user selects the things the user is grateful for the day, the JSON message should be in the following format:

```markdown
{
    date: dateFormat,
    username: username,
    type: "storeGrateful",
    gratefulList: [grateful, grateful,....grateful]
}
```

##Store Worries

When the user selects the things the user is grateful for the day, the JSON message should be in the following format:

```markdown
{
    date: dateFormat,
    username: username,
    type: "storeWorries",
    worries: [worry, worry,....worry]
}
```