import configparser

BASE_URL = 'https://discordapp.com/api'

config = configparser.RawConfigParser()
config.read('discord.cfg')

BOT_TOKEN = config.get('DiscordOptions', 'bot_token')
CLIENT_SECRET = config.get('DiscordOptions', 'client_secret')
CLIENT_ID = config.get('DiscordOptions', 'client_id')

APP_NAME = 'Sample-Game-Client'
REDIRECT_URI = 'http://localhost:3006'

HEADERS = {
    'Authorization': 'Bot {0}'.format(BOT_TOKEN),
    'User-Agent': 'DiscordBot ({0}, 0.1)'.format(APP_NAME)
}