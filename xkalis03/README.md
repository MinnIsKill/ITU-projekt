#Je zapotřebí mít naistalovaný Python 2 (aka verze 2.7) nebo Python 3 a vyšší! Další dependencies viz. níže
##V případě potřeby (Python 2) je potřeba i nainstalovat virtual environment (Python 3 má vlastní)
pip install virtualenv
##Pro instalaci 'pip' pro Python verze 3.5 a vyšší
$ sudo apt install python3-pip
###Úspěšnost instalace lze ověři příkazem
$ pip3 --version

#instalace Flasku
$ pip install Flask

#spuštění serveru
##v příkazové řádce se dostaňte do adresáře '/flask' a následně
$ python3 run.py
##na server se dostanete otevřením url jímž je local path k souboru 'index.html' v libovolném prohlížeči, takže např.
'file:///D:/mypathtothisfolder/xkalis03/project/index.html'