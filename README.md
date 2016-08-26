# apt-restorer
A cli tool which helps restore installed softwares and repository list in a new ubuntu machine


## Installation

Grab it using npm.
> Install it globally to use CLI commands.

```bash
npm install -g apt-restorer
```

## Usage

### Commands ##

```bash
apt-restorer
```
Process all plans as mentioned in `apt-restorer`
#### Version
```bash
apt-restorer --version
```
#### Grab installed repository and softwares
```bash
apt-restorer store
```
#### Run installtion by pointing out a full path for a json file

path name must be a full pathname , and the pathname string must contain the .json filename

```bash
apt-restorer run
```