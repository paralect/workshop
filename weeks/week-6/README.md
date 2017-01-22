Week 6 (2017-01-27)
---

# Vim

## General
- Exit `:q!`

## Navigation

### Arrows
- Left `h`
- Right `l`
- Up `k`
- Down `j`

### Move around words
- Jump to the beginning of the next word `w`
- Jump to the end of the next word `e`
- Jump to the beginning of previous word `b`

### Move on the line
- Jump to the end of text `$`
- Jump to the beginning of text `^`
- Jump to the beginning of the line `0`
- Jump to the next character `f <character>`

### Jump on the page
- Jump to the beginning of the file `gg`
- Jump to the end of the file `G`
- Jump to a particular line `11 gg`
- Jump down half a page `Ctrl + d`
- Jump up half a page `Ctrl + u`
- Match closing/opening bracket/paren etc.

## Insert mode
- Activate `i`
- Exit `Ctrl + [` (`Esc`)
- Insert at the end of the line `Shift + a`
- Insert at the beginning of the line `Shift + i`
- Insert next line `o`
- Insert previous line `Shift + o`
- Replace line `Shift + s`

## Visual mode
- Activate `v`
- Exit `Ctrl + [` (`Esc`)
- Activate line `V`
- Delete `d`

## Search
- Activate `/`
- Go to next match `n`
- Go to previous match `Shift + n`
- Search word `*`

## Find and replace
- Replace line `:s/<find>/<replace>`
- Replace whole file `:%s/<find>/<replace>`
- Glob mode `:%s/<find>/<replace>/g`
- Replace text within selection when in visual mode

## Copy/Cut/Paste
- Copy `y` (in visual mode)
- Copy line `Shift + y` or `yy`
- Paste `p`
- Paste before cursor `Shift + p`
- Cut `x`
- Copy to system clipboard `"+y` (GVim only)
- Paste from system clipboard `"+p` (GVim only)

## Undo/redo
- Undo `u`
- Redo `Ctrl + R`
- Repeat previous command `.`

## Tabs
- Open new tab `:tabe <Enter>`
- Go to next tab `gt`
- Go to previous tab `gT`

## Windows
- Split vertically `Ctrl+w v`
- Split horizontally `Ctrl+w s`
- Go to next window
  * right `Ctrl+w l`
  * left `Ctrl+w h`
  * up `Ctrl+w k`
  * down `Ctrl+w j`
- Close window `Ctrl+w q`

## Links
- [Vim cheat sheet](https://github.com/myaskevich/.files/blob/master/.vimrc)
- [Interactive Vim tutorial: Vim Adventures](https://github.com/myaskevich/.files/blob/master/.vimrc)
- [My .vimrc (Maxim)](https://github.com/myaskevich/.files/blob/master/.vimrc)
