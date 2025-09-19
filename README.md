# 📦 EX - Snack Unit Testing  
Repo: `ex-js-unit-testing-snack`

In questa esercitazione andremo a creare test unitari per diverse funzioni JavaScript utilizzando un framework di testing (ad esempio **Jest**).  

---

## ⚙️ Setup del progetto
1. Clona la repo:
   ```bash
   git clone https://github.com/tuo-utente/ex-js-unit-testing-snack.git
   cd ex-js-unit-testing-snack
   ```
2. Installa le dipendenze:
   ```bash
   npm install
   ```
3. Esegui i test:
   ```bash
   npm test
   ```

---

## 🏆 Snack 1  
**Obiettivo:**  
Creare un test che verifichi la seguente descrizione:  

👉 *La funzione `getInitials` restituisce le iniziali di un nome completo.*  

---

## 🏆 Snack 2  
**Obiettivo:**  
Creare un test che verifichi la seguente descrizione:  

👉 *La funzione `createSlug` restituisce una stringa in lowercase.*  

---

## 🏆 Snack 3  
**Obiettivo:**  
Creare un test che verifichi la seguente descrizione:  

👉 *La funzione `average` calcola la media aritmetica di un array di numeri.*  

---

## 🏆 Snack 4  
**Obiettivo:**  
Creare un test che verifichi la seguente descrizione:  

👉 *La funzione `createSlug` sostituisce gli spazi con `-`.*  

📌 **Esempio:**  
```js
createSlug("Questo è un test") // → "questo-e-un-test"
```

---

## 🏆 Snack 5  
**Obiettivo:**  
Creare un test che verifichi la seguente descrizione:  

👉 *La funzione `isPalindrome` verifica se una stringa è un palindromo.*  

📌 **Nota:**  
Un **palindromo** è una sequenza di caratteri che si legge uguale sia da sinistra a destra che da destra a sinistra.  

---

## 🏆 Snack 6  
**Obiettivo:**  
Creare un test che verifichi la seguente descrizione:  

👉 *La funzione `createSlug` lancia un errore se il titolo è vuoto o non valido.*  

---

## 🏆 Snack 7  
**Obiettivo:**  
Crea un array di oggetti `posts`, in cui ogni oggetto ha le proprietà:  
- `id`  
- `title`  
- `slug`  

Creare un test che verifichi la seguente descrizione:  

👉 *La funzione `findPostById` restituisce il post corretto dato l’array di post e l’id.*  

📌 Creare test aggiuntivi per verificare che:  
- Ogni post ha le proprietà `id`, `title` e `slug`.  
- Venga passato un **id numerico**.  

---

## 🏆 Challenge: `describe()` - Organizzazione dei test  
Organizza i test in blocchi `describe()` raggruppandoli per argomento, così da rendere la struttura più leggibile e ordinata.  

---

## 🎯 Snack 8 (Bonus)  
**Obiettivi:**  
- Dopo aver aggiunto un post con la funzione `addPost`, l'array `posts` deve contenere un elemento in più.  
- Dopo aver rimosso un post con la funzione `removePost`, l'array `posts` deve contenere un elemento in meno.  

📌 **Suggerimento:**  
Ricordati di resettare l’array di post dopo ogni test per evitare che i test influiscano l’uno sull’altro (`beforeEach` o `afterEach`).  

---

## ✅ Consigli utili
- Usa `toBe`, `toEqual`, `toThrow`, `toHaveLength`, `toContainEqual` per verificare i comportamenti attesi.  
- Mantieni i test **indipendenti** tra loro.  
- Raggruppa i test per argomento con `describe()`.  
- Usa `beforeEach` / `afterEach` per resettare i dati condivisi.  

---

