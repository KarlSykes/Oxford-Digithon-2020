import org.java_websocket.WebSocket;
import org.java_websocket.handshake.ClientHandshake;
import org.java_websocket.server.WebSocketServer;

import java.net.InetSocketAddress;

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
    }

    @Override
    public void onError(WebSocket conn, Exception ex) {

    }

    @Override
    public void onStart() {

    }
}
