// SOLID - Single Responsibility Principle
  
  // Valida dados do usuário
  export class UserValidator {
    validate(name, email) {
      if (!name || typeof name !== "string" || !name.trim()) {
        throw new Error("Nome obrigatório");
      }
      if (!email || typeof email !== "string" || !email.includes("@")) {
        throw new Error("Email inválido");
      }
    }
  }
  
  // "Salva" os dados
  export class UserRepository {
    #store = [];
    save(user) { this.#store.push({ ...user }); return user; }
    findAll() { return [...this.#store]; }
  }
  
  // Envia e-mail de boas-vindas
  export class Mailer {
    sendWelcomeEmail(email) {
      return { to: email, subject: "Bem-vindo(a)!", ok: true };
    }
  }
  
  export class UserServiceCorreto {
    constructor({ validator, repository, mailer } = {}) {
      this.validator = validator ?? new UserValidator();
      this.repository = repository ?? new UserRepository();
      this.mailer = mailer ?? new Mailer();
    }
  
    createUser(name, email) {
      this.validator.validate(name, email);
      const user = { name: name.trim(), email: email.trim() };
      this.repository.save(user);
      const mailResult = this.mailer.sendWelcomeEmail(user.email);
      return { user, mailResult };
    }
  }
  
  try {
    const serviceCorreto = new UserServiceCorreto();
    const { user, mailResult } = serviceCorreto.createUser("Teste", "teste@example.com");
    console.log("\nSOLID - Single Responsibility Principle");
    console.log("Usuário criado:", user);
    console.log("Resultado e-mail:", mailResult);
  } catch (err) {
    console.error(err.message);
  }