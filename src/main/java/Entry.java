import java.util.ArrayList;
import java.util.Collection;

public class Entry {

    private ArrayList<String> tags;
    private ArrayList<String> activities;

    public Entry(Collection<String> tags, Collection<String>activities) {
        this.tags = new ArrayList<>(tags);
        this.activities = new ArrayList<>(activities);
    }
}
