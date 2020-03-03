## Scenario

You've been asked to create a first iteration of a simple web client for viewing
factory performance. In the app, the user should be able to log in and see the
statistics for their factories.

## Requirements

- Use the API specification we provide to get the data (see below).
- Use React to render your UI.
- Use Git for version control.
- Include a README.md explaining what's needed to install, build and run the
  project.

You don't have to create a complete, "shippable" app, but we expect the
following functionality to be in place:

- Log in with username and password
- An overview listing all the users' factories, perferably ordered by most
  active within the given time period (has the most sessions).
- A details view of factories, listing a breakdown of sessions in job levels,
  and genders.

Beyond this, feel free to approach the project as you see fit. Choose which
additional tools and technologies you want to use for things like styling,
running builds, linting, routing, etc.

## Evaluation

We will look at your solution, and then go through it together with you. With
the project as a starting point, we will talk about things like:

- What choices you've made for the design of the user interface
- Things in the project that you are particularly satisfied with
- Things you feel could be improved, changed or refactored
- How to plan your work, keep track of issues and features, etc
- How to collaborate with other designers and developers, how to make it easy
  for others to get onboarded
- What you think is characteristic of high code quality, and how to maintain it
- How to make decisions on which technologies to use
- What it was like to work with the technologies you used in the project
- What you feel would be good next step for the project, if it were a real app

## Read and Write API

The **read** API is available at `https://code-test.api.read.quizrrapp.com`. It
requires a JSON Web Token (JWT) to authenticate users.

The **write** API is available at `https://code-test.api.write.quizrrapp.com`. Here is
where you aquire a JWT to feed into the read API.

### Endpoints

#### On write API

**`POST /auth`**

Receive JWT-token.

Payload:

```
{
  "strategy": "local",
  "username": "username",
  "password": "password"
}
```

You will be provided with username and password for authentication. The strategy
should be set to `local`.

#### `DELETE /auth`

Sign out and revoke JWT-token.

The request has to include the token in headers.

```
{
  authorization: `Bearer [JWT]`,
}
```

#### On read API

**Read API playground**

`https://code-test.api.read.quizrrapp.com/graphql`

This is a GraphQL playgound. Here you can explore the structure of the schema.

Some examples:

```
// Get the users factories

{
  me {
    email
    brands {
      _id
      name
      factories {
        _id
        name
        market {
          name
        }
      }
    }
    factories {
      _id
      name
      market {
        name
      }
    }
  }
}
```

```
// Get statistics for one or several factories

{
  sessions(filter:{factory:[factoryId1, factoryId2, ...]}) {
    byJobLevel {
      worker
      manager
      midManager
    }
    byGender {
      female
      male
    }
  }
}
```
