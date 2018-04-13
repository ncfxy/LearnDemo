package com.ncfxy.distributed.kafka;

import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.Producer;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.apache.kafka.clients.producer.RecordMetadata;

import java.util.Properties;
import java.util.concurrent.Future;

public class NcfxyProducer {

    public static void main(String[] args){
        Properties props = new Properties();
        props.put("bootstrap.servers", "47.100.125.114:9092");
        props.put("acks", "all");
        props.put("retries", 0);
        props.put("batch.size", 16384);
        props.put("linger.ms", 1);
        props.put("buffer.memory", 33554432);
        props.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");
        props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");
        props.put("request.timeout.ms", "10000");

        Producer<String, String> producer = new KafkaProducer<String, String>(props);
        for(int i = 0;i < 10;i++){
            Future<RecordMetadata> f = producer.send(new ProducerRecord<String, String>("test", Integer.toString(i), Integer.toString(i)));
            System.out.println("Send: " + i);
        }
        producer.close();
    }
}
