# Messaging Protocol
## Date Format
The date is gonna passed around alot in the json messaging so it should have a consistent format:

DD_MM_YYYY

## Store Tags
When the user selects tags for the day, the JSON mesaage should be in the following format:

```markdown
{
    date: dateFormat,
    type: "storeTags",
    tags: [tag, tag,....tag]
}
```

##Store Activities

When the user selects activities for the day, the JSON mesaage should be in the following format:

```markdown
{
    date: dateFormat,
    type: "storeActivities",
    activities: [activity, activity,....activity]
}
```