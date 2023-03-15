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


## Folder Structure & Practices

- Each subteam gets a folder in docs. Each will contain an img subfolder for images
- Each subteam's folder can have subfolders if desired, or just a collection of pages
- Site organization is defined by nav tree in `mkdocs.yml`
- Top level img folder is for site images, not images used in docs
- Note that each page should use second level headers at the highest. Top level headers are defined by the names in the nav tree.
- Using `jpg` / `jpeg` images is HIGHLY recommended over `png` images. If using `png` images, consider using `pngquant` to compress them first.
- Diagrams should be generated using drawio / diagrams.net (use desktop app). Store the source files in `diagram` folders (in each subteam's folder). When exporting a jpg / png, place it in the `img` folder. Use the same name as the diagram source.
