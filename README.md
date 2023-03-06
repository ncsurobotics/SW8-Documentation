# SW8-Documentation

Documentation for SeaWolf VIII

TODO: Link to gh pages documentation


## Required Tools

Documentation is generated using [mkdocs](https://www.mkdocs.org/) using the [mkdocs-material](https://squidfunk.github.io/mkdocs-material/) theme.

- Install Python3 (executable may just be named `python` on windows)
- Run the following command
    ```sh
    python3 -m pip install -U -r requirements.txt
    ```

## Preview Documentation

- In this folder run the following command

```sh
mkdocs serve
```


## Publishing documentation

**WARNING: Running this command will make the documentation public without prompts!**

```sh
mkdocs gh-deploy
```


## Folder Structure

- Each subteam gets a folder in docs. Each will contain an img subfolder for images
- Each subteam's folder can have subfolders if desired, or just a collection of pages
- Site organization is defined by nav tree in `mkdocs.yml`
- Top level img folder is for site images, not images used in docs

