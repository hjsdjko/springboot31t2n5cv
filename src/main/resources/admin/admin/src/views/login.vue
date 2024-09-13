<template>
  <div>
    <canvas id="canvas" style="background:url(http://codegen.caihongy.cn/20231205/effa942022fc46139846734808456f46.png)"></canvas>
    <div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20231205/effa942022fc46139846734808456f46.png)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
      <el-form :style='{"border":"1px solid #d4d5d7","padding":"40px 100px 40px","margin":"0 auto","borderRadius":"8px","alignItems":"flex-start","textAlign":"center","flexWrap":"wrap","background":"#fcfdff","display":"flex","width":"450px","fontSize":"14px","height":"auto"}'>
        <div v-if="true" :style='{"padding":"0 0 10px","margin":"0 0 0px","borderColor":"#d8ae86","color":"#545655","textAlign":"center","display":"inline-block","background":"none","borderWidth":"0 0 0px","width":"100%","lineHeight":"30px","fontSize":"24px","borderStyle":"solid","fontWeight":"500"}' class="title-container">基于学科门类的大学生兼职平台的设计与实现登录</div>
        <div v-if="loginType==1" class="list-item" :style='{"width":"100%","margin":"0 0 10px","position":"relative","alignItems":"center","flexWrap":"wrap","display":"flex"}'>
          <div v-if="true" class="lable" :style='{"color":"#666","left":"-100px","textAlign":"right","width":"100px","lineHeight":"44px","fontSize":"inherit","position":"absolute"}'>用户名：</div>
          <input :style='{"padding":"0 10px","borderColor":"#d4d5d7","color":"#666","borderRadius":"0px","background":"none","borderWidth":"0 0 1px","width":"250px","fontSize":"inherit","borderStyle":"solid","height":"40px"}' placeholder="请输入用户名" name="username" type="text" v-model="rulesForm.username">
        </div>
        <div v-if="loginType==1" class="list-item" :style='{"width":"100%","margin":"0 0 10px","position":"relative","alignItems":"center","flexWrap":"wrap","display":"flex"}'>
          <div v-if="true" class="lable" :style='{"color":"#666","left":"-100px","textAlign":"right","width":"100px","lineHeight":"44px","fontSize":"inherit","position":"absolute"}'>密码：</div>
          <input :style='{"padding":"0 10px","borderColor":"#d4d5d7","color":"#666","borderRadius":"0px","background":"none","borderWidth":"0 0 1px","width":"250px","fontSize":"inherit","borderStyle":"solid","height":"40px"}' placeholder="请输入密码" name="password" type="password" v-model="rulesForm.password">
        </div>

		<div class="list-item select" :style='{"width":"100%","margin":"0 0 10px","position":"relative","alignItems":"center","flexWrap":"wrap","display":"flex"}' v-if="roles.length>1">
			<div v-if="true" class="lable" :style='{"color":"#666","left":"-100px","textAlign":"right","width":"100px","lineHeight":"44px","fontSize":"inherit","position":"absolute"}'>角色：</div>
		  <el-select v-model="rulesForm.role" placeholder="请选择角色">
		    <el-option v-if="loginType==1||(loginType==2&&item.roleName!='管理员')" v-for="item in roles" :key="item.roleName" :label="item.roleName" :value="item.roleName" />
		  </el-select>
		</div>

		
        <div :style='{"margin":"10px 0 0","alignItems":"center","flexWrap":"wrap","background":"none","display":"block","width":"250px","fontSize":"16px","position":"relative","justifyContent":"flex-start"}'>
          <el-button v-if="loginType==1" :style='{"border":"0px solid #4FA1D9","cursor":"pointer","padding":"0 20px","margin":"0 0 5px","color":"#fff","textAlign":"center","letterSpacing":"4px","float":"left","outline":"none","borderRadius":"4px","background":"#0e88eb","width":"100%","fontSize":"16px","height":"40px"}' type="primary" @click="login()" class="loginInBt">登录</el-button>
          <el-button :style='{"cursor":"pointer","padding":"0 8px","margin":"0 5px 5px 0","borderColor":"rgba(167,142,68,1)rgba(167,142,68,1)","color":"#999","float":"left","borderRadius":"0px","background":"none","borderWidth":"0","width":"auto","fontSize":"14px","lineHeight":"30px","borderStyle":"solidsolid","fontWeight":"500","height":"auto"}' type="primary" @click="register('qiye')" class="register">注册企业</el-button>
        </div>
      </el-form>

    </div>
  </div>
</template>
<script>
import menu from "@/utils/menu";
import canvasBg from "@/assets/js/canvas-bg-2.js";
import "@/assets/css/canvas-bg-2.css"
export default {
  data() {
    return {
		verifyCheck2: false,
		flag: false,
      baseUrl:this.$base.url,
      loginType: 1,
      rulesForm: {
        username: "",
        password: "",
        role: "",
      },
      menus: [],
      roles: [],
      tableName: "",
    };
  },
  mounted() {
    let menus = menu.list();
    this.menus = menus;

    for (let i = 0; i < this.menus.length; i++) {
      if (this.menus[i].hasBackLogin=='是') {
        this.roles.push(this.menus[i])
      }
    }

    this.$nextTick(() => {
      canvasBg()
    })
  },
  created() {

  },
  destroyed() {
	  	      this.$nextTick(() => {
	        canvasBg = null
	      })
	    },
  components: {
  },
  methods: {

    //注册
    register(tableName){
		this.$storage.set("loginTable", tableName);
		this.$router.push({path:'/register',query:{pageFlag:'register'}})
    },
    // 登陆
    login() {

		if (!this.rulesForm.username) {
			this.$message.error("请输入用户名");
			return;
		}
		if (!this.rulesForm.password) {
			this.$message.error("请输入密码");
			return;
		}
		if(this.roles.length>1) {
			if (!this.rulesForm.role) {
				this.$message.error("请选择角色");
				return;
			}

			let menus = this.menus;
			for (let i = 0; i < menus.length; i++) {
				if (menus[i].roleName == this.rulesForm.role) {
					this.tableName = menus[i].tableName;
				}
			}
		} else {
			this.tableName = this.roles[0].tableName;
			this.rulesForm.role = this.roles[0].roleName;
		}
		
		this.loginPost()
    },
	loginPost() {
		this.$http({
			url: `${this.tableName}/login?username=${this.rulesForm.username}&password=${this.rulesForm.password}`,
			method: "post"
		}).then(({ data }) => {
			if (data && data.code === 0) {
				this.$storage.set("Token", data.token);
				this.$storage.set("role", this.rulesForm.role);
				this.$storage.set("sessionTable", this.tableName);
				this.$storage.set("adminName", this.rulesForm.username);
				this.$router.replace({ path: "/" });
			} else {
				this.$message.error(data.msg);
			}
		});
	},
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  position: relative;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
      background: none !important;
    
  .list-item /deep/ .el-input .el-input__inner {
		border-radius: 0px;
		padding: 0 10px;
		color: #666;
		background: none;
		width: 250px;
		font-size: inherit;
		border-color: #d4d5d7;
		border-width: 0 0 1px;
		border-style: solid;
		height: 40px;
	  }
  
  .list-item.select /deep/ .el-select .el-input__inner {
		border-radius: 0px;
		padding: 0 10px;
		margin: 0;
		color: #666;
		background: none;
		width: 250px;
		font-size: 14px;
		border-color: #d4d5d7;
		border-width: 0 0 1px;
		border-style: solid;
		height: 40px;
	  }
  
  .list-code /deep/ .el-input .el-input__inner {
  	  	border-radius: 0px 0 0 0px;
  	  	padding: 0 10px;
  	  	color: #666;
  	  	background: none;
  	  	width: 168px;
  	  	font-size: inherit;
  	  	border-color: #d4d5d7;
  	  	border-width: 0 0 1px;
  	  	border-style: solid;
  	  	height: 40px;
  	  }

  .list-type /deep/ .el-radio__input .el-radio__inner {
		background: rgba(53, 53, 53, 0);
		border-color: #999;
	  }
  .list-type /deep/ .el-radio__input.is-checked .el-radio__inner {
        background: rgba(167,142,68,.2);
        border-color: rgba(167,142,68,.2);
      }
  .list-type /deep/ .el-radio__label {
		color: #999;
		font-size: 14px;
	  }
  .list-type /deep/ .el-radio__input.is-checked+.el-radio__label {
        color: #b98b5f;
        font-size: 14px;
      }
}

</style>
