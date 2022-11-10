package data;

public class Member {
    String name;


    public Member(String name) {
        super();
        setName(name);
    }


    public void setName(String name) {
        if (!name.isBlank()){
            this.name = name;
        }else{
            //Make a exception.
        }
    }

    public String getName() {
        return name;
    }

}