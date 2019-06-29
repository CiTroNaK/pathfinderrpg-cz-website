---
title: Boj
lang: cs-CZ
---

# Boj

## Typy akcí

Typ akce v základu udává, jak dlouho daná akce trvá. 1 kolo v boji má 6 sekund.

1.  **Standardní** (standard) (S)
2.  **Pohybová** (move) (M)
3.  **Celokolová** (full-round) (F)
4.  **Rychlá** (swift) (Sw)
5.  **Bezprostřední** (immediate) (I)
6.  **Volná** (free) (Fr)

V kole můžeš provést **standardní a pohybovou akci** nebo **celokolovou akci**. Můžeš také provést **1 rychlou akci** a jednu či více volných akcí (dle uvážení GM). Můžeš také místo standardní akce mít druhou pohybovou akci.

V některých situacích (jako v kole překvapení) můžeš být omezen na pouze jednu pohybovou nebo standardní akci.

### Standardní akce

-   Útok na blízko
-   Útok na dálku
-   Vystřelení či hození do boje (-4 postih bez Precise Shot featu)
-   Obranný boj (-4 zásah, +2 AC)
-   Aktivace magického předmětu
-   Seslání kouzla

### Pohybové akce

-   Pohyb
-   Směrování či přesměrování kouzla
-   Tasení či schování zbraně
-   Manipulace se zbraní
-   Nasednutí či sesednoutí ze sedla
-   Připravení či položení štítu
-   Postavení se ze země

### Celokolové akce

-   Plný útok (pokud máš možnost více útoků)
-   Sesílání kouzla, které trvá 1 kolo
-   Metamagic kouzlo
-   Běh (4x pohyb, žádný 1 krok)
-   Ústup (2x pohyb, žádný 1 krok, viditelní nepřátelé nemají AoO)

### Volné akce

-   Zrušení koncentrace na kouzlo
-   Puštění drženého předmětu
-   Lehnutí na zem
-   Mluvení (1 až 2 věty)
-   Panika!

### Rychlé akce

-   Zrychlené kouzlo
-   Využití Ki

### Besprostřední akce

-   Různá kouzla, které to mají v popisu.
-   Vzdát se (puštění zbraně a zvednutí rukou).

## Speciální útoky

Většinu těchto speciálních útoků je možné vylepšit pomocí featů, které většinou odebírají AoO nebo zmírňují postihy.

-   **Pomoc druhému (Aid Another)** (S): Můžeš pomoci příteli (+2 AC nebo zásah) proti stejnému nepříteli. Případně i pomoci s jeho dovedností (např. léčit) také +2.
-   **Odsunutí (Bull Rush)** (S nebo s *Naběhuntím*): Vyvolává AoO. Pouze max o jednu velikost většího nepřítele. Při úspěchu odsuneš nepřítele dozadu o 1 políčko, při větším i o více políček. Nemůžeš odsunout nepřítele do nehybného objektu.
-   **Naběhnutí (Charge)** (F nebo S s omezením): Můžeš mít 2x pohyb a standardní akci. Cesta k cíli musí být přímá a bez překážek. Můžeš i tasit zbraň. Získáš +2 na zásah a -2 AC do dalšího kola nebo +2 na *Odsunutí*. V případě standardní akce pouze 1x pohyb a tasení jen rychlým tasením (feat).
-   **Špinavý trik (Dirty Trick)** (S): Vyvolává AoO. Např. hození písku do očí apod. Při úspěchu na 1 kolo, při větším i více kol. Nepříteli stačí pohybová akce, aby se zbavil způsobeného postihu. Vždy na úvaze GM.
-   **Odzbrojení (Disarm)** (místo útoku zblízka): Vyvolává AoO. Při úspěchu nepřítel pustí jeden předmět, při větším i z obou rokou. Při tvém neúspěchu pustíš svoji zbraň.
-   **Postrčení (Drag)** (S): Vyvolává AoO. Pouze max o jednu velikost většího nepřítele. Při úspěchu postrčíš o 1 políčko dozadu, při větším i o více.
-   **Falešný útok (Feint)** (S): V případě úspěchu oblafneš nepřítele tak, že při tvém dalším útoku neví, která bije a ztrácí svůj bonus za obratnost k obraně a případné další bonusy, jako je úhyb. Postihy proti nelidem či jiným tvorům. U nemyslících nemožné.
-   **Chycení (Grapple)** (S): Vyvolává AoO. Pokud máš úspěch a chytneš nepřítele, můžeš ho jako volnou akci pustit, nebo v dalším kole chycení posílit.
-   **Chycen (Grappled)**: Pokud jsi chycen, můžeš se jako standardní akci vyprostit. Nevyvolává AoO.
-   **Proběhnutí (Overrun)** (S během pohybu nebo s *Naběhnutí*): Vyvolává AoO. Pouze max o jednu velikost většího nepřítele. V případě úspěchu proběhneš políčkem nepřítele, při větším nepřítele schodíš i na zem. V případě neúspěchu se o nepřítele zastavíš.
-   **Přemístění (Reposition)** (S): Vyvolává AoO. Pouze max o jednu velikost většího nepřítele. V případě úspechu posuneš nepřítele o políčko v tvém dosahu, při větším i o více. Nemůžeš posunout nepřítele do nebezpečného políčka (např. do lávy) či pevného objektu.
-   **Krádež (Steal)** (S): Vyvolává AoO. Vezmeš viditelný předmět, který nepřítel nedrží (pokud drží, tak je to *Odzbrojení*). Musíš mít jednu ruku volnou. Těžší, pokud je předmět připevněný. Můžeš použít bič s -4 postihem, ale na delší vzdálenost.
-   **Rozbití (Sunder)** (místo útoku zblízka): Vyvolává AoO. Při úspěchu poničíš předmět. Pokud má předmět méně jak půlku HP, tak je poničený. Můžeš se rozhodnout zničit předmět, pokud je na 0 HP.
-   **Podkopnutí (Trip)** (místo útoku zblízka): V případě úspěchu podkopneš nepřítele a skončí na zemi (má pak různé postihy). V případě neúspěchu spadneš ty.
-   **Boj v sedle (Mounted Combat)** (Fr, M nebo F): Velký rozdíl, pokud osedlané zvíře nemá bojový trénink (zvíře má tendenci z boje utéct). Pokud nemá trénink, musíš si hodit na DC 20 Ride jako pohybovou akci a pokud uspěješ, tak můžeš pokračovat se standardní akcí. Pokud neuspěješ, je ta pohybová akce jako celokolová a můžeš tak už využít jen volné či rychlou akce.
-   **Hození tříštivé zbraně (Throw Splash Weapon)** (S): Jedná se o útok na dálku na dotek (Range Touch). Bez postihu. Cíl dostane zranění a pak i vše okolo něj. Pokud mineš, dopadne na nějaké políčko okolo něj nebo nedohodíš.
-   **Boj se dvěmi zbraněmi (Two Weapon Fighting)** (F): Postihy dle typu zbraně (lehké či těžké) a dle ruky (hlavní či vedlejší).

## Speciální pohybové akce

### Ústup (Withdraw)

-   Až 2x pohyb.
-   **Vidielní nepřátelé nebudou mít AoO z pohybu z tvého počátečního políčka.**
-   Během pohybu pak vyvoláváš AoO jako obvykle.
-   Pokud můžeš pouze standardní akci, tak je to pouze 1x pohyb.

## Speciální akce měnící pořadí v kole

### Vyčkávání (Delay)

-   Čekáš a nic nedeláš, dokud nechceš.
-   Nemůžeš přerušit akci někoho jiného (kromě besprostřední akce).
-   **Pokud se rozhodneš něco dělat, tvé pořadí v kole (iniciativa) se mění.**
-   Pokud se v daném kole rozhodneš nehrát, odpadají ti akce v tomto kole a můžeš v dalším kole začít klidně jako první. Stejně jako v předchozím případě se mění pořadí a v dalším kole začínáš na stejném místě (tedy např. jako první).

### Připravení akce (Ready)

-   Můžeš si vybrat **standardní**, **pohybovou**, **rychlou** nebo **volnou akci** a určit podmínku, kdy se provede.
-   **Samotné připravení akce je standardní akce**. Nemůžeš tak v daném kole mít jinou standardní akci.
-   Můžeš mít 1 krok v rámci připravené akce pouze v případě, že jsi neměl v daném kole pohybovou akci.
-   **Výsledné pořadí závisí od toho, kdy využiješ svoji připravenou akci:**
    -   Pokud využiješ svoji připravou akci ještě **v daném kole**, snižuje se tvé pořadí**.
    -   Pokud využiješ svoji připravenou akci až **v dalším kole** před svým původním pořadím, **pořadí se ti mění a toto kolo již nemáš další akce**.
    -   Pokud **nevyužiješ svoji připravenou akci** a jsi na řade v dalším kole, **nemusíš ji použít** a můžeš normálně využít své kolo, ale připravená akce propadá.
-   Příklady:
    -   Vyrušení kouzelníka *(kouzelní si hodí na koncentraci DC 10 + zranění + úroveň kouzla)*
    -   Pritokouzlení
    -   Připravení zbraně (pokud to umožňuje) proti *Naběhnutí*.

## Ostatní speciální akce

### Útok z příležitosti (AoO)

-   Jsou dva druhy akcí, které vyprovokují příležitost k útoku (Attack of Opportunity - zkráceně AoO):
    -   **Opuštění nebo vstup bez další aktivity nepřítele z tvého nebo do tvého dosahu zbraně** (většinou 1 políčko okolo tvé postavy dle zbraně) pokud se tomu cíleně nechce vyhnout (1 krok, ústupu nebo akrobatického vyhnutí).
    -   **Provedení akce, která vyvolává AoO** (viz některé ze speciálních útoků).
-   O AoO se musíš přihlásit sám a během kola můžeš udělat **pouze jeden útok z příležitosti**.
-   Jedná se o útok s **nevyjšším bonusem** a aplikují se na něj případné postihy či bonusy, které plynou z tvé akce v daném kole (pokud jsi již nějakou měl). Např. pokud předtím použiješ Power Attack, platí i pro AoO útok.

### Obranný boj (Fighting Defensively)

-   **Oznam před zahájením svého útoku.**
-   Počítej k útoku **postih -4**, za to dostaneš bonus **+2 k AC** jako úhyb (dodge) do tvého dalšího tahu. **Pokud máš v Akrobacii 3 a více bodů, je bonus +3 k AC.**

### Úplná obrana (Total Defense)

-   Standardní akce, získáš **bonus +4 k AC**.
-   **Pokud máš v Akrobaci 3 a více bodů, je bonus +6 k AC.**
-   **Protože se bráníš, tak logicky ani neútočíš při této akci.**
-   Dále nemůžeš používat AoO do další tvé akce.
-   **Nemůžeš kombinovat s obranným bojem nebo Combat Expertise.**

## Zajímavosti k boji

-   Iniciativa je důležitá, protože nejenom určuje pořadí, ale všichni, kdo se ještě v prvním kole nedostali před tebou na řadu, mají sníženou obranu o bonus za obratnost (a o případné další bonusy jako je úhyb). Stejně tak, pokud je nepřítel první, tak máš tento postih ty.
-   Flankování: pokud ty a přítel útočíte na stejného nepřítele a jste naproti sobě (nepřítel je mezi vámi), máte bonus k zásahu +2.
-   1 krok (5-foot step) nevyvolává AoO.
-   Kouzlení vyvolává AoO, pokud tomu chceš zabránit, můžeš kouzlit obranně (hod na koncentraci).

## Pohyb, terén a překážky

-   V **normálním terénu** je každé sudé diagonální políčko bráno jako 2 políčka.
-   V **těžkém terénu** je 1 políčko jako **2** a diagonální vždy jako 3 políčka.
-   V **těžším terénu** je 1 políčko jako **4** a diagonální vždy jako 6 políček.
-   V **nejtěžším terénu** je 1 políčko jako **8** a diagonální vždy jako 12 políček.
-   V těžkém terénu nemůžeš běžet nebo použít *Naběhnutí*.
-   Políčko překážky je bráno jako dvojnásobek a pokud nemáš dostatek pohybu na zdolání celé překážky a políčka za ní, tak se o to ani nesnaž.
-   Skoro vždy můžeš udělat alespoň 1 krok (posunout se o 1 políčko):
    -   V rámci celokolové akce na začátku nebo na konci.
    -   V případě velmi těžkého terénu jako celokolová akce i diagonálně.
    -   U připravené akce (viz Připravení akce).
-   Naopak nemůžeš použít 1 krok, pokud jsi měl v kole již nějaký jiný pohyb.

## Krytí (Cover)

-   Pro zjištění, zda máš krytí: pokud přímka z nějakého rohu z tebou okupovaného políčka prochází překážkou (či jejím rohem) mezi jakýmkoliv rohem políčka nepřítele, máš krytí, které poskytuje +4 k AC proti útokům na dálku.
-   Podobně to funguje i na útok z blízka.
-   Nízká překážka (do půlky tvé výšky) ti může poskytnout krytí, pokud je nepřítel i ty dále jak 6 políček od překážky. Pokud je útočník blíže, než ty k překážce, krytí neplatí.
-   Nemůžeš využít AoO proti nepříteli s krytím vůči tobě.
-   Krytí přidává +2 na záchranné hody na Reflex v určitých případech.
-   Pokud máš krytí, můžeš vyuzít Stealth dovednost.
-   Jako krytí můžeš využít svých přátel či nepřátel proti útokům z dálky. Takto získané krytí nemá bonus na Reflex a nemůžeš Stealth.
-   Pokud máš krytí pouze na půlku svého těla, tak máš částečné krytí (+2 na AC / +1 na Reflex). Rozhoduje GM.
-   Pokud žádná přímka z tvého políčka nezasahuje políčko nepřítele, máš plné krytí. Nemůže na tebe nepřítel zaútočit (a ty na něj také ne).

![Ukázka krytí (Zdroj: d20pfsrd.com, použito bez povolení... snad mi to odpustí :-) )](/images/combat/cover.jpg)

-   **#1**: Fighter je přímo u Ogra. Ogr nemá krytí proti Fighterovi.
-   **#2**: Rogue je u Ogra. Ogr má krytí. Rogue ne, protože Ogr má větší dosah (tedy se to počítá jako s útokem na dálku).
-   **#3**: Clerik útočí z dálky. Některé přímky od něj jdou přes zeď, takže Ogr má krytí.
-   **#4**: Sorcerer útočí z dálky. Přímky ukazují, že může vidět více jak půlku z Ogra, takže Ogr má pouze částečné krytí.

## Zatajení (Concealment)

-   Podobné, jako krytí, ale není z pevného materiálu a jedná se tak spíše o skrytí se před zrakem nepřítele.
-   Pokud máš zatajení, tak v případě úspěšného útoku na tebe si hodíš %, pokud hodíš 20% a méně, netrefil.
-   Umožnuje stealth stejně, jako krytí.
-   Mít plné zatajení neznamená, že na tebe nemůže někdo zaútočit. Pokud si vybere správné políčko, má 50% šanci na zásah.
-   Plné zatajení je např. z neviditelnosti. Nepřítel ale může poznat, kde jsi, pokud tě najde pomocí Perception (přehazuje tvůj Stealth s bonusem za neviditelnost +20/+40).
