package com.ncfxy.distributed.kafka;

import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.clients.consumer.KafkaConsumer;

import java.util.Arrays;
import java.util.Properties;

public class NcfxyConsumer {

    public static void main(String[] args){
        Properties props = new Properties();
        props.put("bootstrap.servers", "47.100.125.114:9092");
        props.put("group.id", "test");
        props.put("enable.auto.commit", "true");
        props.put("auto.commit.interval.ms", "1000");
        props.put("key.deserializer", "org.apache.kafka.common.serialization.StringDeserializer");
        props.put("value.deserializer", "org.apache.kafka.common.serialization.StringDeserializer");
        KafkaConsumer<String, String> consumer = new KafkaConsumer<String, String>(props);
        consumer.subscribe(Arrays.asList("test","notification-fw-mail_rollback-company-ess-advanced",
                "notification-fw-mail_mark_read_unread-company-ess-advanced",
                "notification-fw-mail_receive-company-ess-advanced",
                "notification-fw-mail_migration-company-ess-advanced",
                "notification-fw-mail_send-company-ess-advanced",
                "notification-fw-mailing_list_subscription-company-ess-advanced",
                "notification-fw-mail_batch_ops-company-ess-advanced"));
        while(true) {
            ConsumerRecords<String, String> records = consumer.poll(100);
            for(ConsumerRecord<String, String> record: records){
                System.out.printf("offset = %d, key = %s, value=%s%n", record.offset(), record.key(), record.value());
            }
        }
    }
}
