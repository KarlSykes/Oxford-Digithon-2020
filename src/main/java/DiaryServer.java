import com.google.gson.*;
import com.mongodb.client.*;
import com.mongodb.client.model.Projections;
import org.bson.Document;
import org.java_websocket.WebSocket;
import org.java_websocket.handshake.ClientHandshake;
import org.java_websocket.server.WebSocketServer;


import java.net.InetSocketAddress;
import java.util.*;
import java.util.function.Consumer;

public class DiaryServer extends WebSocketServer {
    private static final int PORT = 8081;

    public DiaryServer(InetSocketAddress address) {
        super(address);
    }

    public static void main(String[] args) {
        InetSocketAddress home = new InetSocketAddress(PORT);
        DiaryServer connection = new DiaryServer(home);
        connection.start();
        System.out.println("Server Waiting for Connection");
        MongoClient mongoClient = MongoClients.create(
                "mongodb+srv://js395:p51L$rJ$xCY1AY!vF@oxfdigithon2020-hqnun.azure.mongodb.net/test?retryWrites=true&w=majority");
        MongoDatabase database = mongoClient.getDatabase("OxfordDigithon2020");
//
//        MongoCollection<Document> collection = database.getCollection("testCollection");
//        collection.insertOne(new Document("test3", Arrays.asList())
//        .append("test2", "thirteen"));
//        System.out.println("Number of Documents: " + collection.countDocuments());
//        System.out.println("Found: " + collection.countDocuments(new Document("test1", Arrays.asList("a1","a2","a3"))));
//        collection.find(new Document("test2","thirteen") ).projection(Projections.excludeId()).forEach((Consumer<? super Document>) d -> {
//            System.out.println(d.toJson());
//        });
//        System.out.println("here");





    }


    @Override
    public void onOpen(WebSocket conn, ClientHandshake handshake) {
        System.out.println("Connection Opened " + conn.getRemoteSocketAddress());
    }

    @Override
    public void onClose(WebSocket conn, int code, String reason, boolean remote) {
        System.out.println("Connection Closed " + conn.getRemoteSocketAddress());
    }

    @Override
    public void onMessage(WebSocket conn, String message) {

        System.out.println("Message Received: " + message);

        JsonObject msg = new Gson().fromJson(message, JsonObject.class);
        String type = msg.get("type").getAsString();
        String date = msg.get("date").getAsString();
        String user = msg.get("username").getAsString();

        MongoClient mongoClient = MongoClients.create(
                "mongodb+srv://js395:p51L$rJ$xCY1AY!vF@oxfdigithon2020-hqnun.azure.mongodb.net/test?retryWrites=true&w=majority");
        MongoDatabase database = mongoClient.getDatabase("OxfordDigithon2020");
        MongoCollection<Document> Entries = database.getCollection("Entries");
        Document filter;
        switch (type) {
            case "storeMoods":
                System.out.println("STORING HERE");
                JsonArray moods = msg.get("moods").getAsJsonArray();
                String[] moodsList = new Gson().fromJson(moods, String[].class);
                filter = new Document("user", user)
                        .append("date", date);
                if (Entries.countDocuments(filter) == 1) {
                    Entries.updateOne(filter, new Document("moods", moodsList));
                } else {
                    Entries.insertOne(new Document("user",user)
                    .append("date", date)
                    .append("moods", moodsList)
                    .append("activities", Collections.emptyList())
                    .append("worries", Collections.emptyList())
                    .append("grateful", Collections.emptyList()));
                }
                break;
            case "storeActivities":
                JsonArray activities = msg.get("activities").getAsJsonArray();
                String[] activitiesList = new Gson().fromJson(activities, String[].class);
                filter = new Document("user", user)
                        .append("date", date);
                if (Entries.countDocuments(filter) == 1) {
                    Entries.updateOne(filter, new Document("activities", activitiesList));
                } else {
                    Entries.insertOne(new Document("user",user)
                            .append("date", date)
                            .append("activities", activitiesList)
                            .append("moods", Collections.emptyList())
                            .append("worries", Collections.emptyList())
                            .append("grateful", Collections.emptyList()));
                }
                break;
            case "storeWorries":
                JsonArray worries = msg.get("worries").getAsJsonArray();
                String[] worriesList = new Gson().fromJson(worries, String[].class);
                filter = new Document("user", user)
                        .append("date", date);
                if (Entries.countDocuments(filter) == 1) {
                    Entries.updateOne(filter, new Document("worries", worriesList));
                } else {
                    Entries.insertOne(new Document("user",user)
                            .append("date", date)
                            .append("activities", Collections.emptyList())
                            .append("moods", Collections.emptyList())
                            .append("worries", worriesList)
                            .append("grateful", Collections.emptyList()));
                }
                break;
            case "storeGrateful":
                JsonArray grateful = msg.get("worries").getAsJsonArray();
                String[] gratefuleList = new Gson().fromJson(grateful, String[].class);
                filter = new Document("user", user)
                        .append("date", date);
                if (Entries.countDocuments(filter) == 1) {
                    Entries.updateOne(filter, new Document("grateful", gratefuleList));
                } else {
                    Entries.insertOne(new Document("user",user)
                            .append("date", date)
                            .append("activities", Collections.emptyList())
                            .append("moods", Collections.emptyList())
                            .append("worries", Collections.emptyList())
                            .append("grateful", gratefuleList));
                }
                break;
            case "getEntry":
                filter = new Document("user", user)
                        .append("date", date);
                if (Entries.countDocuments(filter)  > 0) {
                    Consumer<? super Document> action = document -> {
                        document.append("type", "Entry");
                        conn.send(document.toJson());
                    };
                    for (Document document1 : Entries.find(filter).projection(Projections.excludeId())) {
                        action.accept(document1);
                    }
                } else {
                    Document document = new Document("user",user)
                            .append("date", date)
                            .append("activities", Collections.emptyList())
                            .append("moods", Collections.emptyList())
                            .append("worries", Collections.emptyList())
                            .append("grateful", Collections.emptyList())
                            .append("type", "Entry");
                    conn.send(document.toJson());
                }
                break;

        }
    }

    @Override
    public void onError(WebSocket conn, Exception ex) {

    }

    @Override
    public void onStart() {

    }
}
