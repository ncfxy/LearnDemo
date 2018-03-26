package com.ncfxy.json.gson;

import com.google.gson.Gson;

public class GsonTest {
    public static void main(String[] args){
        GsonTest a = new GsonTest();
        a.basicTypeOperation();
        a.pojoOperation();

    }

    public void basicTypeOperation(){
        Gson gson = new Gson();
        // 从String解析成基本类型
        int i = gson.fromJson("100", int.class);            // 100
        double d = gson.fromJson("\"99.99\"", double.class);    // 99.99
        boolean b = gson.fromJson("true", boolean.class);       // true
        String str = gson.fromJson("String", String.class);     // String
        System.out.println(i);
        System.out.println(d);
        System.out.println(b);
        System.out.println(str);

        String jsonNumber = gson.toJson(100);       // 100
        String jsonBoolean = gson.toJson(false);    // false
        String jsonString = gson.toJson("String"); //"String"
        System.out.println(jsonNumber);
        System.out.println(jsonBoolean);
        System.out.println(jsonString);
    }

    public void pojoOperation(){
        Gson gson = new Gson();
        User user = new User("怪盗kidou",24);
        String jsonObject = gson.toJson(user); // {"name":"怪盗kidou","age":24}
        System.out.println(jsonObject);
        String jsonString = "{\"name\":\"怪盗kidou\",\"age\":24}";
        user = gson.fromJson(jsonString, User.class);
        System.out.println(user);
    }

    public class User {
        public User(String name, int age){
            this.name = name;
            this.age = age;
        }
        //省略其它
        public String name;
        public int age;
        public String emailAddress;
    }
}
