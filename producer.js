
const { kafka } = require("./client")


async function init() {
    const producer = kafka.producer()

    console.log("connectiong to producer..")
    await producer.connect()
    console.log("connected to producer..")

    await producer.send({
        topic: 'Rider-updates',
        messages: [
            {
                key: "location-update",
                value: JSON.stringify({ name: 'Tony Start', loc: 'SOUTH' }),
                partition: 0
            }

        ]
    })


    await producer.disconnect()
    console.log("producer disconnected")
}

init();
