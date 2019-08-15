# Pull Requests

* [Setting up your local environment](#setting-up-your-local-environment)
  * [Step 1: Fork](#step-1-fork)
  * [Step 2: Branch](#step-2-branch)
* [Making Changes](#making-changes)
  * [Step 4: Code](#step-4-code)
  * [Step 5: Commit](#step-5-commit)
    * [Commit message guidelines](#commit-message-guidelines)
  * [Step 6: Rebase](#step-6-rebase)
  * [Step 7: Push](#step-7-push)
  * [Step 8: Opening the Pull Request](#step-8-opening-the-pull-request)
  * [Step 9: Landing](#step-9-landing)
  * [Continuous Integration Testing](#continuous-integration-testing)

## Setting up your local environment

### Step 1: Fork

Fork the project [on GitHub](https://github.com/portal-game-hack/Chaser-The-Python) and clone your fork
locally.

```sh
$ git clone https://github.com/portal-game-hack/Chaser-The-Python.git
$ cd thegame
$ git remote add upstream https://github.com/portal-game-hack/Chaser-The-Python.git
$ git fetch upstream
```

### Step 2: Branch

To keep your development environment organized, create local branches to
hold your work. These should be branched directly off of the `master` branch.

```sh
$ git checkout -b my-branch -t upstream/master
```

## Making Changes

### Step 4: Code

The code is in the `app/` folder, the documentation in `docs/`
or tests in the `test/` folder.

Please be sure to run `npm run lint` from time to time on any code changes
to ensure that they follow the project's code style.


### Step 5: Commit

It is recommended to keep your changes grouped logically within individual
commits. Many contributors find it easier to review changes that are split
across multiple commits. There is no limit to the number of commits in a
pull request.

```sh
$ git add my/changed/files
$ git commit
```

#### Breaking Changes

A commit that has the text `BREAKING CHANGE:` at the beginning of its optional
body or footer section introduces a breaking API change (correlating with Major
in semantic versioning). A breaking change can be part of commits of any type.
e.g., a `fix:`, `feat:` & `chore:` types would all be valid, in addition to any
other type.

See [conventionalcommits.org](https://conventionalcommits.org) for more details.

### Step 6: Rebase

Once you have committed your changes, it is a good idea to use `git rebase`
(not `git merge`) to synchronize your work with the main repository.

```sh
$ git fetch upstream
$ git rebase upstream/master
```

This ensures that your working branch has the latest changes from master.

### Step 7: Push

Once your commits are ready to go -- with passing tests and linting --
begin the process of opening a pull request by pushing your working branch
to your fork on GitHub.

```sh
$ git push origin my-branch
```

### Step 9: Opening the Pull Request

From within GitHub, opening a new pull request will present you with a template
that should be filled out:

```markdown
<!--
Thank you for your pull request. Please provide a description above and review
the requirements below.

Bug fixes and new features should include tests and possibly benchmarks.

Contributors guide: https://github.com/portal-game-hack/Chaser-The-Python/CONTRIBUTING.md
-->
```

### Step 11: Landing

In order to land, a pull request needs to be reviewed and approved by
at least one  Code Owner and pass CI. After that, if there are no
objections from other contributors, the pull request can be merged.

Congratulations and thanks for your contribution!

### Continuous Integration Testing

Every pull request is tested on the Continuous Integration (CI) system to
confirm that it works.

Ideally, the pull request will pass ("be green").
This means that all tests pass and there are no linting errors. However,
it is not uncommon for the CI infrastructure itself to fail
for so-called "flaky" tests to fail ("be red"). Each CI
failure must be manually inspected to determine the cause.

