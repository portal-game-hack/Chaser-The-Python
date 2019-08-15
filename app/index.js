var recastai = require('recastai').default;

module.exports = (app) => {
    // Your code here
    app.log('Yay! The app was loaded!');

    // example of probot responding 'Hello World' to a new issue being opened
    app.on('issues.opened', async context => {
        app.log(context.payload.issue.title);

        // You can get a token from https://recast.ai
        // Don't forget to add it to the .env file!
        var request = new recastai.request(process.env.RECASTAI_TOKEN);
        request.analyseText(context.payload.issue.title)
            .then(function(result) {

                // Is this an assertion, a question, or a command.

                if(result.isAssert()) {
                    // This is an assertion. Let's file this as a bug report
                    var label = 'bug'
                }
                else if (result.isCommand()) {
                    // This is a command. Let's file this as a feature request
                    var label = 'enhancement'
                }
                else if (result.isWhQuery() || result.isYnQuery()) {
                    // This is a question, let's label it as such
                    var label = 'question'
                }


                if(label) {
                    let params = context.issue({
                        labels: [label]
                    });

                    context.github.issues.addLabels(params)
                }

            }).catch(function(err) {
            // Handle error
            app.log(err)
        })
    })
};
