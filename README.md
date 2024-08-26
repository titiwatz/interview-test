# interview-test

### golang stucture

    myapp/
    ├── cmd/
    |   ├── app/
    |   |   └── main.go
    ├── internal/
    |   ├── api/
    |   |   ├── http/
    |   |   |   ├── middleware/
    |   |   |   |   ├── middleware.go
    |   |   |   |   ├── middleware_test.go
    |   |   |   ├── server/
    |   |   |   |   ├── server.go
    |   |   |   |   ├── server_test.go
    |   |   |   |   └── router.go
    |   ├── config/
    |   |   ├── config.go
    |   ├── util/
    |   |   └── util.go
    ├── pkg/
    |   ├── user/
    |   |   ├── repository/
    |   |   |   ├── user_repository.go
    |   |   |   ├── user_repository_test.go
    |   |   ├── service/
    |   |   |   ├── user_service.go
    |   |   |   └── user_service_test.go
    |   |   ├── model/
    |   |   |   ├── user_model.go
    |   |   ├── handler/
    |   |   |   ├── user_handler.go
    |   |   |   └── user_handler_test.go
    ├── Dockerfile
    ├── Makefile
    ├── README.md
    ├── go.mod
    └── go.sum


### nestjs stucture

    myapp/
    ├── src/
    |   ├── main.ts
    |   ├── app.module.ts
    |   ├── app.module.ts
    |   ├── configuration/
    |   |   ├── config.ts
    |   ├── user/
    |   |   ├── dto/
    |   |   |   ├── create-user.dto.ts
    |   |   ├── interfaces/
    |   |   |   ├── user.interface.ts
    |   |   ├── repository/
    |   |   |   ├── user.repository.ts
    |   |   ├── entities/
    |   |   |   ├── user..entity.ts
    |   |   ├── user.controller.go
    |   |   ├── user.module.go
    |   |   └── user.service.go
    |   ├── common/
    |   |   ├── decorators/
    |   |   ├── filters/
    |   |   ├── guards/
    |   |   ├── interceptors/
    |   |   ├── middleware/
    |   |   └── pipes/
    ├── Dockerfile
    ├── README.md
