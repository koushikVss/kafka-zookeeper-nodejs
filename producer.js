
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
                key: "1",
                value: JSON.stringify({ name: 'Tony Start', loc: 'SOUTH' }),
                // partition: 0
            },
            {
                key: "2",
                value: JSON.stringify({ name: 'Captain AMerica', loc: 'North' }),
                // partition: 0
            }

        ]
    })


    await producer.disconnect()
    console.log("producer disconnected")
}

init();
