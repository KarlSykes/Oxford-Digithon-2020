# Database Schema
## User Collection
This collection will just be a list of users registered with the service. So the schema will just be a document with a list of names.

(Name:String)

## Entry Collection
This will be a collection of entries with user and date as the primary key. The name of the Collection is "Entries"
(<ins>user:String, date:dateFormat,</ins> moods:[String,...,String], activities:[String,...,String], grateful:[String,...,String], worries:[String,...,String])