import java.util.ArrayList;
import java.util.Collection;

public class Entry {

    public ArrayList<String> tags;
    public ArrayList<String> activities;

    public Entry(Collection<String> tags, Collection<String>activities) {
        this.tags = new ArrayList<>(tags);
        this.activities = new ArrayList<>(activities);
    }

    public Entry() {
        tags = new ArrayList<>();
        activities = new ArrayList<>();
    }
}
