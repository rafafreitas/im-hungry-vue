<template>
  <div class="app flex-row align-items-center">
    <div class="img-full-login">
      <div id="back-div"></div>
      <img src="/static/img/back/back.png">
    </div><!-- /.video-full -->
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <h1>Login</h1>
                <p class="text-muted">Acesse com sua conta</p>
                <b-input-group class="mb-3">
                  <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                  <input type="text" class="form-control" placeholder="E-Mail">
                </b-input-group>
                <b-input-group class="mb-4">
                  <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                  <input type="password" class="form-control" placeholder="Senha">
                </b-input-group>
                <b-row>
                  <b-col cols="6">
                    <b-button variant="primary" id="btn-login" class="px-4">Login</b-button>
                  </b-col>
                  <b-col cols="6" class="text-right">
                    <b-button variant="link" class="px-0 btn-link-login">Esqueceu a Senha?</b-button>
                  </b-col>
                </b-row>
              </b-card-body>
            </b-card>
            <b-card no-body class="text-white bg-primary py-5 d-md-down-none bg-login" style="width:44%">
              <b-card-body class="text-center">
                <div>
                  <h2>Inscreva-se</h2>
                  <p>Ainda não possui cadastro? Faça como milhões de estabelecimentos e impulsione suas vendas com o poder de alcance do I`m Hungry. <br >É grátis!</p>
                  <b-button variant="primary" class="active mt-3">Registrar Agora!</b-button>
                </div>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>
