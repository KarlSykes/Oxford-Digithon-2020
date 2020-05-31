import com.google.gson.*;
import org.java_websocket.WebSocket;
import org.java_websocket.handshake.ClientHandshake;
import org.java_websocket.server.WebSocketServer;

import java.io.*;
import java.net.InetSocketAddress;
import java.text.SimpleDateFormat;

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

//        File jsonEntry = new File("Entries/" + "25_05_1999.json");
//        Entry entry = new Entry();
//        if(jsonEntry.exists() && !jsonEntry.isDirectory()){
//            System.out.println("found file!");
//            try {
//                JsonStreamParser parser = new JsonStreamParser(new FileReader(jsonEntry));
//                JsonObject oldEntry = parser.next().getAsJsonObject();
//                System.out.println(new Gson().toJson(oldEntry));
//
//                JsonArray tags = oldEntry.get("tags").getAsJsonArray();
//                JsonArray activities = oldEntry.get("activities").getAsJsonArray();
//
////                for(JsonElement tag: tags) {
////                    System.out.println("Tag: " + tag.getAsString());
////                    entry.tags.add(tag.getAsString());
////                }
////
////                for(JsonElement activity: activities) {
////                    System.out.println("Activitiy: "+ activity.getAsString());
////                    entry.activities.add(activity.getAsString());
////                }
//
//
//            } catch (FileNotFoundException e) {
//                e.printStackTrace();
//            }
//        }



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
        File jsonEntry = new File("Entries/" + date + ".json");
        try {
            JsonArray tags = new JsonArray();
            JsonArray activities = new JsonArray();

            if(jsonEntry.exists() && !jsonEntry.isDirectory()){

                    JsonStreamParser parser = new JsonStreamParser(new FileReader(jsonEntry));
                    JsonObject oldEntry = parser.next().getAsJsonObject();
                    System.out.println(new Gson().toJson(oldEntry));

                    tags = oldEntry.get("tags").getAsJsonArray();
                    activities = oldEntry.get("activities").getAsJsonArray();



            }

            switch(type) {
                case "storeTags":
                    JsonArray newTags = msg.get("tags").getAsJsonArray();
                    tags.add(newTags);
                    break;
                case "storeActivities":
                    JsonArray newActivities = msg.get("activities").getAsJsonArray();
                    activities.add(newActivities);
                    break;
            }


            JsonObject newEntry = new JsonObject();
            newEntry.add("tags", tags);
            newEntry.add("activities", activities);

            String newEntryString = new Gson().toJson(newEntry);

            PrintWriter writer = new PrintWriter(new FileWriter(jsonEntry));
            writer.print(newEntryString);
            writer.flush();
            writer.close();

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void onError(WebSocket conn, Exception ex) {

    }

    @Override
    public void onStart() {

    }
}
