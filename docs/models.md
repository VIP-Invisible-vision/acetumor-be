# models
## user 
> user only contain user auth
```js
user =
{
	_id: 'string' ,     // user id
	auth: 'string'      // user auth info
}
```

## record
> user image record
```js
record =
{
	_id: 'string',       // record id
	uid: 'string',       // user id
	timestamp: int,      // time make the record
	img: 'string',       // encoded image
	cat: int,            // tumor category
	des: 'string',       // description given by ML model
	feedback: 'string'   // doctor feedback
}
```

## articles
> articles
```js
articles =
{
	_id: 'string',       // article id
	title: 'string',     // title of the article
	timestamp: int,      // time post the article
	content: 'string'    // article content
}
```

## userinfo:
> User infomation and contact detaild
```js
userInfo =
{
	_id: uid,            // user id
	role: 'string',      // the user role(e.g. patient)
	specilist: 'string', // the specialist if role is doctor
	email: 'string',     // user email
	phone: 'string',     // user mobile number
}
```

## post
> post info
```js
post =
{
	_id: id ,           // post id
	thread: 'string',   // thread of the post
	title: 'string',    // title of the post
	owner: uid ,        // owner
	timestamp: int,     // time the post made
	visibility: 'string',// the post's visibility(public, uid, staff)
	content: 'string' , // content of the post
	image: ['string']   // image of the post
}
```

## reply
> post reply
```js
reply =
{
	_id: 'string',      // reply id
	owner: uid ,        // owner id
	pid: pid  ,         // post id
	replyTo: rid  ,     // list of reply
	timestamp: int     // time the reply made
}
```