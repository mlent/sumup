from TwitterSearch import *

try:
	searchOrder = TwitterSearchOrder()
	searchOrder.setKeywords(['#sumup'])
	searchOrder.setCount(10)
	searchOrder.setIncludeEntities(False)

	ts = TwitterSearch(
		consumer_key = 'alhGk8zoN2Lvx2tJKDl6LKlrU',
		consumer_secret = 'ALE2hUgWOMVYP8Fb7XMDNlaayclh8trpHBj77IsozK4ryDYC4S',
		access_token = '1158897613-pUTOgkdrBWmNUCjIU33GN6DXqLU1373Ff2Sv6KG',
		access_token_secret = 'YVbALEhTft4U22iDO3xmtyAGsETJfVN2hhh6Fp0SvGX8l'
	)

	for tweet in ts.searchTweetsIterable(searchOrder):
		print('@%s tweeted: %s' % (tweet['user']['screen_name'], tweet['text']))

except TwitterSearchException as e:
	print (e)
