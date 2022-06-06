# eHealth Grafana Plugin

## Development Setup

1. Setup docker on your system
2. Make a directory called `grafana-plugins` and clone the repo into that directory (e.g. `./grafana-plugins/e-health` using `git clone https://github.com/trylaarsdam/EHealth-Grafana-Plugin.git grafana-plugins/e-health`)
3. Install the dependencies using `yarn install`
4. On Unix based systems, run `docker run -d -p 3000:3000 -v "$(PWD)"/grafana-plugins:/var/lib/grafana/plugins --name=grafana --env GF_DEFAULT_APP_MODE=development grafana/grafana-oss:8.5.3`
5. Access grafana at `http://localhost:3000`
6. After making changes to the source code, run `yarn dev` and reload the grafana page you are on