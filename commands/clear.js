module.exports = {
    name: 'clear',
    description: "Clear messages",
    async execute(Client, message, args) {
        if(!args[0]) return message.reply("Enter the correct amount of messages to be cleared, sir!");
        if(isNaN(args[0])) return message.reply("That is not a number....");

        if(args[0] > 100) return message.reply("I do not have access to remove more than 100 messages, sir!");
        if(args[0] < 1) return message.reply("You need to delete at least one message, stupid.");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        })
    }
}