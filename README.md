
# 💻 Sticky Quips - Backend & Database

## Description
This repository holds production files used to build a note taking applications that provides user the experience of writing sticky notes with short despcritions and links.\

Please follow **[THIS LINK](https://willdarkins.github.io/sticky-quips-frontend/)** to the deployed front-end applicatoin.

![sticky-quips-backend-example](https://user-images.githubusercontent.com/84754257/155666783-e1d5b8ea-9248-4874-86c1-51223adbfd1c.gif)

## Table of Contents

* [Badges](#badges)
* [Installation](#installation)
* [Database](#database)
* [Credits](#credits)
* [License](#license)
* [Questions](#questions)

## Badges 
*The following programming languages, frameworks, platforms and libraries were utilized when completing this project:*

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## Installation
<br>

- In the Github repository, copy the SSH key link to clone onto your local device
- Open the project in your code editor of choice and enter the following command in console:
  - `npm i`
  - The following dependencies will being to run:
    - `body-parser` - `cors` - `dotenv` - `express` - `mongoose`
- When dependencies have finished installation begin to run your server with the following command in the terminal:
  - **`npm start`**
- Now head over to <a href=https://insomnia.rest>Insomnia CORE</a> and begin testing routes:

**`http://stickyquips.herokuapp.com/notes`**
  - `GET` all notes
```json
{
	"notes": [
		{
			"_id": "62187c443dc23ff220d8151b",
			"text": "This is a test note",
			"link": "google.com",
			"__v": 0
		},
		{
			"_id": "62187ccc3dc23ff220d8151e",
			"text": "How about some groceries",
			"link": "newseasons.com",
			"__v": 0
		},
		{
			"_id": "62187cd53dc23ff220d81520",
			"text": "I need cat food",
			"link": "petco.com",
			"__v": 0
		},
		{
			"_id": "62187cef3dc23ff220d81525",
			"text": "Go shopping later",
			"link": "amazon.com",
			"__v": 0
		}
	]
}
```

 - `POST` a new note:
```json
{
	"text" : "I have two cats named Daisy and Boris",
	"link" : "https://google.com"
}
```

**`http://stickyquips.herokuapp.com/notes/:id`**
  - `GET` note by id
  - `PUT` to update a note by id
```json
{
	"notes": [
		{
			"_id": "62187c443dc23ff220d8151b",
			"text": "This is a test note",
			"link": "google.com",
			"__v": 0
		}
	]
}
```
  - `DELETE` note by id
```json
{
	"reply": "delete note by id success"
}
```
## Database
The application uses the document-oriented database program Mongodb. Mongoose extension is also utilized to bridge the syntax gap for Javascript.
There is only one model and that is `Note` whose structure is listed below:
```json
const noteSchema = new mongoose.Schema({
    text: String,
    link: String
  });
```

## Credits
Big shout out to <a href = https://github.com/Ileriayo>Ileriayo Adebiyi</a> and his <a href =https://github.com/Ileriayo/markdown-badges>markdown badges repository</a> which made this project all the more beautiful. Thank You.<br>

## License
*This project is licensed under:* <br>
![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)<br>
<a href= https://opensource.org/licenses/MIT)>MIT License Link</a><br>

## Contributing
This project adheres to standards set by the <a href = https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md>Contributor Covenant</a>.<br>
Please consult this documentation before contributing to this project.

## Questions
![Profile Pic](https://user-images.githubusercontent.com/84754257/145705294-57134da6-c3b7-40f4-bcbe-ad9cddb27f47.jpg)

If you have any questions regarding the development process of this application, or specific questions about contributing, feel free to reach me by email or on Github.
* Email 📪 willdarkins@gmail.com
* Github 🗿 [willdarkins](https://github.com/willdarkins) 
