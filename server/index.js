const uniqid = require('uniqid');

let userId = null;

const db = {
  users: [
    {
      id: "a2",
      login: "login",
      password: "password"
    }
  ],
  contacts: {
    a2: [
      {
        id: "a21",
        phone: "123456789",
        name: "Dad"
      }
    ]
  }
}


module.exports = (req, res, next) => {
  switch (req.url) {

    case '/user':
      switch (req.method) {
        case 'POST':
          const user = getUser(req.body);
          if (user) {
            userId = user.id;
            makeSuccessResponce(res, user);
          } else {
            makeUnsuccessResponce(res, 'User didnt find', 1)
          }
          break;

        case 'DELETE':
          userId = null;
          makeSuccessResponce(res, {});
          break;

        default:
          break;
      }

      break;

    case '/contacts':
      if (userId) {
        switch (req.method) {
          case "GET":
            const responce = getContacts(userId);
            makeSuccessResponce(res, responce);
            break;

          case "PUT":
            if (userId) {
              const items = db.contacts[userId];
              const itemIdx = items.findIndex(el => el.id === req.body.id);
              const newItem = {
                name: req.body.name,
                phone: req.body.phone,
                id: req.body.id ? req.body.id : uniqid()
              }
              if (itemIdx !== -1) {
                db.contacts[userId] = [...items.slice(0, itemIdx), newItem, ...items.slice(itemIdx + 1)];
              } else {
                db.contacts[userId] = [...items, newItem];
              }
              makeSuccessResponce(res, db.contacts[userId]);


            }
            break;

          case "DELETE":
            if (userId) {
              const items = db.contacts[userId];
              const itemId = items.findIndex(el => el.id === req.body.id);
              db.contacts[userId] = [...items.slice(0, itemId), ...items.slice(itemId + 1)];
              makeSuccessResponce(res, db.contacts[userId]);
            }
            break;

          default:
            makeUnsuccessResponce(res, 'User didnt find', 1)
        }
      } else makeUnsuccessResponce(res, 'User didnt find', 1)

      break;

    default:
      next();
  }
}


const makeSuccessResponce = (res, data) => {
  res.json({
    statusCode: 0,
    data
  })
}

const makeUnsuccessResponce = (res, error, errCode) => {
  res.json({
    statusCode: errCode,
    error
  })
}


const getUser = ({ login, password }) => {
  return db.users.find(el => el.login === login && el.password === password)
}


const getContacts = (userId) => {
  return db.contacts[userId]
}