const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
  clientId: "uber-app",
  brokers: ["192.168.29.156:9092"],
});