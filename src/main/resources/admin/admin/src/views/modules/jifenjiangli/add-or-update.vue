<template>
	<div class="addEdit-block" :style='{"minHeight":"100vh","padding":"30px 30px 30px 0","fontSize":"14px","color":"#666","background":"#f4f8fb"}'>
		<el-form
			:style='{"border":"1px solid #e1e8ee","padding":"50px 10% 20px","overflow":"hidden","borderRadius":"0px","alignItems":"flex-start","flexWrap":"wrap","background":"rgba(255,255,255,1)","display":"flex","fontSize":"inherit"}'
			class="add-update-preview"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="180px"
		>
			<template >
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="学生账号" prop="xueshengzhanghao">
					<el-input v-model="ruleForm.xueshengzhanghao" placeholder="学生账号" clearable  :readonly="ro.xueshengzhanghao"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' v-else class="input" label="学生账号" prop="xueshengzhanghao">
					<el-input v-model="ruleForm.xueshengzhanghao" placeholder="学生账号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="学生姓名" prop="xueshengxingming">
					<el-input v-model="ruleForm.xueshengxingming" placeholder="学生姓名" clearable  :readonly="ro.xueshengxingming"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' v-else class="input" label="学生姓名" prop="xueshengxingming">
					<el-input v-model="ruleForm.xueshengxingming" placeholder="学生姓名" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="学科门类" prop="xuekemenlei">
					<el-input v-model="ruleForm.xuekemenlei" placeholder="学科门类" clearable  :readonly="ro.xuekemenlei"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' v-else class="input" label="学科门类" prop="xuekemenlei">
					<el-input v-model="ruleForm.xuekemenlei" placeholder="学科门类" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="手机" prop="shouji">
					<el-input v-model="ruleForm.shouji" placeholder="手机" clearable  :readonly="ro.shouji"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' v-else class="input" label="手机" prop="shouji">
					<el-input v-model="ruleForm.shouji" placeholder="手机" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="兼职时长" prop="jianzhishizhang">
					<el-input v-model.number="ruleForm.jianzhishizhang" placeholder="兼职时长" clearable  :readonly="ro.jianzhishizhang"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' v-else class="input" label="兼职时长" prop="jianzhishizhang">
					<el-input v-model="ruleForm.jianzhishizhang" placeholder="兼职时长" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="效率高" prop="xiaolvgao">
					<el-input v-model="ruleForm.xiaolvgao" placeholder="效率高" clearable  :readonly="ro.xiaolvgao"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' v-else class="input" label="效率高" prop="xiaolvgao">
					<el-input v-model="ruleForm.xiaolvgao" placeholder="效率高" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="好评" prop="haoping">
					<el-input v-model="ruleForm.haoping" placeholder="好评" clearable  :readonly="ro.haoping"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' v-else class="input" label="好评" prop="haoping">
					<el-input v-model="ruleForm.haoping" placeholder="好评" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' class="upload" v-if="type!='info' && !ro.touxiang" label="头像" prop="touxiang">
					<file-upload
						tip="点击上传头像"
						action="file/upload"
						:limit="3"
						:multiple="true"
						:fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
						@change="touxiangUploadChange"
					></file-upload>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' class="upload" v-else-if="ruleForm.touxiang" label="头像" prop="touxiang">
					<img v-if="ruleForm.touxiang.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.touxiang.split(',')[0]" width="100" height="100">
					<img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.touxiang.split(',')" :src="$base.url+item" width="100" height="100">
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="奖励积分" prop="jifen">
					<el-input v-model.number="ruleForm.jifen" placeholder="奖励积分" clearable  :readonly="ro.jifen"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' v-else class="input" label="奖励积分" prop="jifen">
					<el-input v-model="ruleForm.jifen" placeholder="奖励积分" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' class="date" v-if="type!='info'" label="奖励时间" prop="jianglishijian">
					<el-date-picker
						value-format="yyyy-MM-dd HH:mm:ss"
						v-model="ruleForm.jianglishijian" 
						type="datetime"
						:readonly="ro.jianglishijian"
						placeholder="奖励时间"
					></el-date-picker>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' class="input" v-else-if="ruleForm.jianglishijian" label="奖励时间" prop="jianglishijian">
					<el-input v-model="ruleForm.jianglishijian" placeholder="奖励时间" readonly></el-input>
				</el-form-item>
			</template>
			<el-form-item :style='{"padding":"10px 0 20px","margin":"30px 0","alignItems":"center","textAlign":"left","display":"block","width":"100%","clear":"both","perspective":"320px","-webkitPerspective":"320px","fontSize":"48px","justifyContent":"flex-start"}' class="btn">
				<el-button class="btn3"  v-if="type!='info'" type="success" @click="onSubmit">
					<span class="icon iconfont icon-tijiao16" :style='{"margin":"0 2px","fontSize":"18px","color":"inherit","display":"none"}'></span>
					保存
				</el-button>
				<el-button class="btn4" v-if="type!='info'" type="success" @click="back()">
					<span class="icon iconfont icon-quxiao09" :style='{"margin":"0 2px","fontSize":"18px","color":"inherit","display":"none"}'></span>
					取消
				</el-button>
				<el-button class="btn5" v-if="type=='info'" type="success" @click="back()">
					<span class="icon iconfont icon-fanhui01" :style='{"margin":"0 2px","fontSize":"18px","color":"inherit","display":"none"}'></span>
					返回
				</el-button>
			</el-form-item>
		</el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
	data() {
		let self = this
		var validateIdCard = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!checkIdCard(value)) {
				callback(new Error("请输入正确的身份证号码"));
			} else {
				callback();
			}
		};
		var validateUrl = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isURL(value)) {
				callback(new Error("请输入正确的URL地址"));
			} else {
				callback();
			}
		};
		var validateMobile = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isMobile(value)) {
				callback(new Error("请输入正确的手机号码"));
			} else {
				callback();
			}
		};
		var validatePhone = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isPhone(value)) {
				callback(new Error("请输入正确的电话号码"));
			} else {
				callback();
			}
		};
		var validateEmail = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isEmail(value)) {
				callback(new Error("请输入正确的邮箱地址"));
			} else {
				callback();
			}
		};
		var validateNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isNumber(value)) {
				callback(new Error("请输入数字"));
			} else {
				callback();
			}
		};
		var validateIntNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isIntNumer(value)) {
				callback(new Error("请输入整数"));
			} else {
				callback();
			}
		};
		return {
			id: '',
			type: '',
			
			
			ro:{
				xueshengzhanghao : false,
				xueshengxingming : false,
				xuekemenlei : false,
				shouji : false,
				jianzhishizhang : false,
				xiaolvgao : false,
				haoping : false,
				touxiang : false,
				jifen : false,
				jianglishijian : false,
			},
			
			
			ruleForm: {
				xueshengzhanghao: '',
				xueshengxingming: '',
				xuekemenlei: '',
				shouji: '',
				jianzhishizhang: '',
				xiaolvgao: '',
				haoping: '',
				touxiang: '',
				jifen: '',
				jianglishijian: '',
			},
		

			
			rules: {
				xueshengzhanghao: [
				],
				xueshengxingming: [
				],
				xuekemenlei: [
				],
				shouji: [
				],
				jianzhishizhang: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				xiaolvgao: [
				],
				haoping: [
				],
				touxiang: [
				],
				jifen: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				jianglishijian: [
				],
			}
		};
	},
	props: ["parent"],
	computed: {



	},
    components: {
    },
	created() {
		this.ruleForm.jianglishijian = this.getCurDateTime()
	},
	methods: {
		
		// 下载
		download(file){
			window.open(`${file}`)
		},
		// 初始化
		init(id,type) {
			if (id) {
				this.id = id;
				this.type = type;
			}
			if(this.type=='info'||this.type=='else'){
				this.info(id);
			}else if(this.type=='logistics'){
				this.logistics=false;
				this.info(id);
			}else if(this.type=='cross'){
				var obj = this.$storage.getObj('crossObj');
				for (var o in obj){
						if(o=='xueshengzhanghao'){
							this.ruleForm.xueshengzhanghao = obj[o];
							this.ro.xueshengzhanghao = true;
							continue;
						}
						if(o=='xueshengxingming'){
							this.ruleForm.xueshengxingming = obj[o];
							this.ro.xueshengxingming = true;
							continue;
						}
						if(o=='xuekemenlei'){
							this.ruleForm.xuekemenlei = obj[o];
							this.ro.xuekemenlei = true;
							continue;
						}
						if(o=='shouji'){
							this.ruleForm.shouji = obj[o];
							this.ro.shouji = true;
							continue;
						}
						if(o=='jianzhishizhang'){
							this.ruleForm.jianzhishizhang = obj[o];
							this.ro.jianzhishizhang = true;
							continue;
						}
						if(o=='xiaolvgao'){
							this.ruleForm.xiaolvgao = obj[o];
							this.ro.xiaolvgao = true;
							continue;
						}
						if(o=='haoping'){
							this.ruleForm.haoping = obj[o];
							this.ro.haoping = true;
							continue;
						}
						if(o=='touxiang'){
							this.ruleForm.touxiang = obj[o];
							this.ro.touxiang = true;
							continue;
						}
						if(o=='jifen'){
							this.ruleForm.jifen = obj[o];
							this.ro.jifen = true;
							continue;
						}
						if(o=='jianglishijian'){
							this.ruleForm.jianglishijian = obj[o];
							this.ro.jianglishijian = true;
							continue;
						}
				}
				this.ruleForm.jifen = 0
				this.ro.jifen = false;
			}
			// 获取用户信息
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code === 0) {
					var json = data.data;
				} else {
					this.$message.error(data.msg);
				}
			});
			
		},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `jifenjiangli/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
        //解决前台上传图片后台不显示的问题
        let reg=new RegExp('../../../upload','g')//g代表全部
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {
	if(this.ruleForm.touxiang!=null) {
		this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
	}
var objcross = this.$storage.getObj('crossObj');
      var table = this.$storage.getObj('crossTable');
      if(objcross!=null) {
		  if(!this.ruleForm.jifen){
			  this.$message.error("奖励积分不能为空");
			  return
		  }
	      objcross.jifen = parseFloat(objcross.jifen) + parseFloat(this.ruleForm.jifen)
                }
      //更新跨表属性
       var crossuserid;
       var crossrefid;
       var crossoptnum;
       if(this.type=='cross'){
                var statusColumnName = this.$storage.get('statusColumnName');
                var statusColumnValue = this.$storage.get('statusColumnValue');
                if(statusColumnName!='') {
                        var obj = this.$storage.getObj('crossObj');
                       if(statusColumnName && !statusColumnName.startsWith("[")) {
                               for (var o in obj){
                                 if(o==statusColumnName){
                                   obj[o] = statusColumnValue;
                                 }
                               }
                               var table = this.$storage.get('crossTable');
                             this.$http({
                                 url: `${table}/update`,
                                 method: "post",
                                 data: obj
                               }).then(({ data }) => {});
                              this.$http({
                                  url: `${table}/update`,
                                  method: "post",
                                  data: objcross
                                }).then(({ data }) => {});
                       } else {
                               crossuserid=this.$storage.get('userid');
                               crossrefid=obj['id'];
                               crossoptnum=this.$storage.get('statusColumnName');
                               crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                        }
                }
        }
		this.$refs["ruleForm"].validate(valid => {
			if (valid) {
				if(crossrefid && crossuserid) {
					this.ruleForm.crossuserid = crossuserid;
					this.ruleForm.crossrefid = crossrefid;
					let params = { 
						page: 1, 
						limit: 10, 
						crossuserid:this.ruleForm.crossuserid,
						crossrefid:this.ruleForm.crossrefid,
					} 
				this.$http({ 
					url: "jifenjiangli/page", 
					method: "get", 
					params: params 
				}).then(({ 
					data 
				}) => { 
					if (data && data.code === 0) { 
						if(data.data.total>=crossoptnum) {
							this.$message.error(this.$storage.get('tips'));
							return false;
						} else {
							this.$http({
								url: `jifenjiangli/${!this.ruleForm.id ? "save" : "update"}`,
								method: "post",
								data: this.ruleForm
							}).then(({ data }) => {
								if (data && data.code === 0) {
									this.$message({
										message: "操作成功",
										type: "success",
										duration: 1500,
										onClose: () => {
											this.parent.showFlag = true;
											this.parent.addOrUpdateFlag = false;
											this.parent.jifenjiangliCrossAddOrUpdateFlag = false;
											this.parent.search();
											this.parent.contentStyleChange();
										}
									});
									this.$http({
										url: `${table}/update`,
										method: "post",
										data: objcross
									}).then(({ data }) => {});
								} else {
									this.$message.error(data.msg);
								}
							});

						}
					} else { 
				} 
			});
		} else {
			this.$http({
				url: `jifenjiangli/${!this.ruleForm.id ? "save" : "update"}`,
				method: "post",
			   data: this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$http({
						url: `${table}/update`,
						method: "post",
						data: objcross
					}).then(({ data }) => {});
					this.$message({
						message: "操作成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.parent.showFlag = true;
							this.parent.addOrUpdateFlag = false;
							this.parent.jifenjiangliCrossAddOrUpdateFlag = false;
							this.parent.search();
							this.parent.contentStyleChange();
						}
					});
				} else {
					this.$message.error(data.msg);
			   }
			});
		 }
         }
       });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.jifenjiangliCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
    touxiangUploadChange(fileUrls) {
	    this.ruleForm.touxiang = fileUrls;
    },
  }
};
</script>
<style lang="scss" scoped>
	.amap-wrapper {
		width: 100%;
		height: 500px;
	}
	
	.search-box {
		position: absolute;
	}
	
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  	  padding: 0 10px 0 0;
	  	  color: #333;
	  	  font-weight: 600;
	  	  display: inline-block;
	  	  width: 180px;
	  	  font-size: inherit;
	  	  line-height: 40px;
	  	  text-align: right;
	  	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 180px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  	  padding: 0 12px;
	  	  color: inherit;
	  	  font-size: 14px;
	  	  border-color: #e1e8ee;
	  	  border-radius: 0px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  background: #f5f8fa;
	  	  width: auto;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  min-width: 350px;
	  	  height: 32px;
	  	}
	.add-update-preview .el-input-number /deep/ .el-input__inner {
		text-align: left;
	  	  padding: 0 12px;
	  	  color: inherit;
	  	  font-size: 14px;
	  	  border-color: #e1e8ee;
	  	  border-radius: 0px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  background: #f5f8fa;
	  	  width: auto;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  min-width: 350px;
	  	  height: 32px;
	  	}
	.add-update-preview .el-input-number /deep/ .el-input-number__decrease {
		display: none;
	}
	.add-update-preview .el-input-number /deep/ .el-input-number__increase {
		display: none;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  	  padding: 0 10px;
	  	  color: inherit;
	  	  font-size: 14px;
	  	  border-color: #e1e8ee;
	  	  border-radius: 0px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  background: #f5f8fa;
	  	  width: auto;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  min-width: 350px;
	  	  height: 32px;
	  	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  	  padding: 0 10px 0 30px;
	  	  color: inherit;
	  	  font-size: 14px;
	  	  border-color: #e1e8ee;
	  	  border-radius: 0px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  background: #f5f8fa;
	  	  width: auto;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  min-width: 350px;
	  	  height: 32px;
	  	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  	  cursor: pointer;
	  	  color: #c0cfdc;
	  	  object-fit: cover;
	  	  font-size: 24px;
	  	  border-color: #e1e8ee;
	  	  line-height: 90px;
	  	  border-radius: 16px;
	  	  background: #f5f8fa;
	  	  width: 90px;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  text-align: center;
	  	  height: 90px;
	  	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  	  cursor: pointer;
	  	  color: #c0cfdc;
	  	  object-fit: cover;
	  	  font-size: 24px;
	  	  border-color: #e1e8ee;
	  	  line-height: 90px;
	  	  border-radius: 16px;
	  	  background: #f5f8fa;
	  	  width: 90px;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  text-align: center;
	  	  height: 90px;
	  	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  	  cursor: pointer;
	  	  color: #c0cfdc;
	  	  object-fit: cover;
	  	  font-size: 24px;
	  	  border-color: #e1e8ee;
	  	  line-height: 90px;
	  	  border-radius: 16px;
	  	  background: #f5f8fa;
	  	  width: 90px;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  text-align: center;
	  	  height: 90px;
	  	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  	  padding: 12px;
	  	  color: inherit;
	  	  font-size: 14px;
	  	  border-color: #e1e8ee;
	  	  min-height: 120px;
	  	  border-radius: 0px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  background: #f5f8fa;
	  	  width: auto;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  min-width: 550px;
	  	  height: auto;
	  	}
	
	.add-update-preview .btn .btn1 {
				border: 1px solid rgba(53, 184, 224, 0.1);
				cursor: pointer;
				padding: 0 10px;
				margin: 0px 4px;
				color: #fff;
				display: inline-block;
				font-size: 12px;
				line-height: 24px;
				border-radius: 2px;
				outline: none;
				background: #03a9f4;
				width: auto;
				height: 26px;
			}
	
	.add-update-preview .btn .btn1:hover {
				box-shadow: 0px 0px 9px #ccc;
				transform: translate3d(0px, 0px, 0px);
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn2 {
				border: 1px solid rgba(24, 138, 226, 0.1) ;
				cursor: pointer;
				border-radius: 2px;
				padding: 0 10px;
				margin: 0px 4px;
				outline: none;
				color: #fff;
				background: #6c757d;
				width: auto;
				font-size: 12px;
				line-height: 24px;
				height: 26px;
			}
	
	.add-update-preview .btn .btn2:hover {
				box-shadow: 0px 0px 9px #ccc;
				transform: translate3d(0px, 0px, 0px);
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn3 {
				border: 0px solid #0260ad;
				cursor: pointer;
				border-radius: 2px;
				padding: 0 20px;
				margin: 0px 4px;
				outline: none;
				color: #fff;
				background: #78bcee;
				width: auto;
				font-size: 12px;
				line-height: 24px;
				height: 26px;
			}
	
	.add-update-preview .btn .btn3:hover {
				box-shadow: 0px 0px 9px #ccc;
				transform: translate3d(0px, 0px, 0px);
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn4 {
				border: 0px solid rgba(126, 96, 16, .2);
				cursor: pointer;
				border-radius: 2px;
				padding: 0 20px;
				margin: 0px 4px;
				outline: none;
				color: #fff;
				background: #7dc855;
				width: auto;
				font-size: 12px;
				line-height: 24px;
				height: 26px;
			}
	
	.add-update-preview .btn .btn4:hover {
				box-shadow: 0px 0px 9px #ccc;
				transform: translate3d(0px, 0px, 0px);
				background: rgba(28,132,198,1);
				opacity: 1;
			}
	
	.add-update-preview .btn .btn5 {
				border: 0px solid rgba(114, 123, 132, 0.1);
				cursor: pointer;
				border-radius: 2px;
				padding: 0 20px;
				margin: 4px;
				outline: none;
				color: #fff;
				background: #fcce54;
				width: auto;
				font-size: 12px;
				line-height: 24px;
				height: 26px;
			}
	
	.add-update-preview .btn .btn5:hover {
				box-shadow: 0px 0px 9px #ccc;
				transform: translate3d(0px, 0px, 0px);
				opacity: 1;
			}
</style>
