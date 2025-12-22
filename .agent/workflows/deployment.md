---
description: Pipeline de Deploy via GitHub Actions e Docker Hub
---

Este projeto utiliza um pipeline de CI/CD acionado por operações Git. Não execute `pnpm build` localmente para fins de deployment.

1.  Realize as alterações no código.
2.  Commit as alterações: `git commit -m "Sua mensagem"`
3.  Push das alterações: `git push`
4.  O GitHub Actions disparará o build e publicará a imagem Docker.
5.  No ambiente de deployment, atualize a imagem: `docker pull <imagem>`
