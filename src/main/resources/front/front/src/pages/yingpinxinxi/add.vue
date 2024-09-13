<template>
<div :style='{"width":"100%","padding":"30px 7% 40px","margin":"0px auto","position":"relative","background":"#fff"}'>
    <el-form
	  :style='{"border":"0px solid #eee","padding":"30px 0","alignItems":"flex-start","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","position":"relative"}'
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
    >
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="学生账号" prop="xueshengzhanghao">
            <el-input v-model="ruleForm.xueshengzhanghao" 
                placeholder="学生账号" clearable :disabled=" false  ||ro.xueshengzhanghao"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="学生姓名" prop="xueshengxingming">
            <el-input v-model="ruleForm.xueshengxingming" 
                placeholder="学生姓名" clearable :disabled=" false  ||ro.xueshengxingming"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="性别" prop="xingbie">
            <el-input v-model="ruleForm.xingbie" 
                placeholder="性别" clearable :disabled=" false  ||ro.xingbie"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="年龄" prop="nianling">
            <el-input v-model="ruleForm.nianling" 
                placeholder="年龄" clearable :disabled=" false  ||ro.nianling"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="学历" prop="xueli">
            <el-input v-model="ruleForm.xueli" 
                placeholder="学历" clearable :disabled=" false  ||ro.xueli"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="学科门类" prop="xuekemenlei">
            <el-input v-model="ruleForm.xuekemenlei" 
                placeholder="学科门类" clearable :disabled=" false  ||ro.xuekemenlei"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="籍贯" prop="jiguan">
            <el-input v-model="ruleForm.jiguan" 
                placeholder="籍贯" clearable :disabled=" false  ||ro.jiguan"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="手机" prop="shouji">
            <el-input v-model="ruleForm.shouji" 
                placeholder="手机" clearable :disabled=" false  ||ro.shouji"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="身份证" prop="shenfenzheng">
            <el-input v-model="ruleForm.shenfenzheng" 
                placeholder="身份证" clearable :disabled=" false  ||ro.shenfenzheng"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="积分" prop="jifen">
            <el-input v-model.number="ruleForm.jifen" 
                placeholder="积分" clearable :disabled=" false  ||ro.jifen"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="出生日期" prop="chushengriqi">
              <el-date-picker
				  :disabled=" false  ||ro.chushengriqi"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                  v-model="ruleForm.chushengriqi" 
                  type="date"
                  placeholder="出生日期">
              </el-date-picker> 
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="企业账号" prop="qiyezhanghao">
            <el-input v-model="ruleForm.qiyezhanghao" 
                placeholder="企业账号" clearable :disabled=" false  ||ro.qiyezhanghao"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="企业名称" prop="qiyemingcheng">
            <el-input v-model="ruleForm.qiyemingcheng" 
                placeholder="企业名称" clearable :disabled=" false  ||ro.qiyemingcheng"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="招聘封面" v-if="type!='cross' || (type=='cross' && !ro.zhaopinfengmian)" prop="zhaopinfengmian">
            <file-upload
            tip="点击上传招聘封面"
            action="file/upload"
            :limit="3"
            :multiple="true"
            :fileUrls="ruleForm.zhaopinfengmian?ruleForm.zhaopinfengmian:''"
            @change="zhaopinfengmianUploadChange"
            ></file-upload>
          </el-form-item>
            <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' class="upload" v-else label="招聘封面" prop="zhaopinfengmian">
                <img v-if="ruleForm.zhaopinfengmian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.zhaopinfengmian.split(',')[0]" width="100" height="100">
                <img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.zhaopinfengmian.split(',')" :src="baseUrl+item" width="100" height="100">
            </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="期望薪资" prop="qiwangxinzi">
            <el-input v-model="ruleForm.qiwangxinzi" 
                placeholder="期望薪资" clearable :disabled=" false  ||ro.qiwangxinzi"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="教育背景" prop="jiaoyubeijing">
            <el-input v-model="ruleForm.jiaoyubeijing" 
                placeholder="教育背景" clearable :disabled=" false  ||ro.jiaoyubeijing"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="简历文件" prop="jianliwenjian">
            <file-upload
            tip="点击上传简历文件"
            action="file/upload"
            :limit="1"
			:type="3"
            :multiple="true"
            :fileUrls="ruleForm.jianliwenjian?ruleForm.jianliwenjian:''"
            @change="jianliwenjianUploadChange"
            ></file-upload>
          </el-form-item>  
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="投递时间" prop="toudishijian">
              <el-date-picker
				  :disabled=" false  ||ro.toudishijian"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  v-model="ruleForm.toudishijian" 
                  type="datetime"
                  placeholder="投递时间">
              </el-date-picker>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="工作经历" prop="gongzuojingli">
            <editor 
                :style='{"minHeight":"250px","padding":"0","margin":"0","borderColor":"#1abc9e30","backgroundColor":"none","borderRadius":"0","borderWidth":"0px","width":"100%","borderStyle":"solid","height":"auto"}'
                v-model="ruleForm.gongzuojingli" 
                class="editor" 
                action="file/upload">
            </editor>
          </el-form-item>

      <el-form-item :style='{"width":"100%","padding":"0","margin":"0","textAlign":"center"}'>
        <el-button :style='{"border":"0px solid #eccc19","cursor":"pointer","padding":"0","margin":"0 20px 0 0","color":"#fff","borderRadius":"20px","background":"#0062a5","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"border":"1px solid #ccc","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#666","borderRadius":"20px","background":"none","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
	  let self = this
      return {
        id: '',
        baseUrl: '',
        ro:{
				xueshengzhanghao : false,
				xueshengxingming : false,
				xingbie : false,
				nianling : false,
				xueli : false,
				xuekemenlei : false,
				jiguan : false,
				shouji : false,
				shenfenzheng : false,
				jifen : false,
				chushengriqi : false,
				qiyezhanghao : false,
				qiyemingcheng : false,
				zhaopinfengmian : false,
				qiwangxinzi : false,
				jiaoyubeijing : false,
				jianliwenjian : false,
				toudishijian : false,
				gongzuojingli : false,
				sfsh : false,
				shhf : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          xueshengzhanghao: '',
          xueshengxingming: '',
          xingbie: '',
          nianling: '',
          xueli: '',
          xuekemenlei: '',
          jiguan: '',
          shouji: '',
          shenfenzheng: '',
          jifen: '',
          chushengriqi: '',
          qiyezhanghao: '',
          qiyemingcheng: '',
          zhaopinfengmian: '',
          qiwangxinzi: '',
          jiaoyubeijing: '',
          jianliwenjian: '',
          toudishijian: '',
          gongzuojingli: '',
        },


        rules: {
          xueshengzhanghao: [
          ],
          xueshengxingming: [
          ],
          xingbie: [
          ],
          nianling: [
            { required: true, message: '年龄不能为空', trigger: 'blur' },
          ],
          xueli: [
            { required: true, message: '学历不能为空', trigger: 'blur' },
          ],
          xuekemenlei: [
          ],
          jiguan: [
          ],
          shouji: [
          ],
          shenfenzheng: [
          ],
          jifen: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          chushengriqi: [
          ],
          qiyezhanghao: [
          ],
          qiyemingcheng: [
          ],
          zhaopinfengmian: [
          ],
          qiwangxinzi: [
            { required: true, message: '期望薪资不能为空', trigger: 'blur' },
          ],
          jiaoyubeijing: [
          ],
          jianliwenjian: [
          ],
          toudishijian: [
          ],
          gongzuojingli: [
          ],
          sfsh: [
          ],
          shhf: [
          ],
        },
		centerType: false,
      };
    },
    computed: {



    },
    components: {
    },
    created() {
		if(this.$route.query.centerType){
			this.centerType = true
		}
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.baseUrl = this.$config.baseUrl;
      this.ruleForm.toudishijian = this.getCurDateTime()
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
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
            if(o=='xingbie'){
              this.ruleForm.xingbie = obj[o];
              this.ro.xingbie = true;
              continue;
            }
            if(o=='nianling'){
              this.ruleForm.nianling = obj[o];
              this.ro.nianling = true;
              continue;
            }
            if(o=='xueli'){
              this.ruleForm.xueli = obj[o];
              this.ro.xueli = true;
              continue;
            }
            if(o=='xuekemenlei'){
              this.ruleForm.xuekemenlei = obj[o];
              this.ro.xuekemenlei = true;
              continue;
            }
            if(o=='jiguan'){
              this.ruleForm.jiguan = obj[o];
              this.ro.jiguan = true;
              continue;
            }
            if(o=='shouji'){
              this.ruleForm.shouji = obj[o];
              this.ro.shouji = true;
              continue;
            }
            if(o=='shenfenzheng'){
              this.ruleForm.shenfenzheng = obj[o];
              this.ro.shenfenzheng = true;
              continue;
            }
            if(o=='jifen'){
              this.ruleForm.jifen = obj[o];
              this.ro.jifen = true;
              continue;
            }
            if(o=='chushengriqi'){
              this.ruleForm.chushengriqi = obj[o];
              this.ro.chushengriqi = true;
              continue;
            }
            if(o=='qiyezhanghao'){
              this.ruleForm.qiyezhanghao = obj[o];
              this.ro.qiyezhanghao = true;
              continue;
            }
            if(o=='qiyemingcheng'){
              this.ruleForm.qiyemingcheng = obj[o];
              this.ro.qiyemingcheng = true;
              continue;
            }
            if(o=='zhaopinfengmian'){
              this.ruleForm.zhaopinfengmian = obj[o].split(",")[0];
              this.ro.zhaopinfengmian = true;
              continue;
            }
            if(o=='qiwangxinzi'){
              this.ruleForm.qiwangxinzi = obj[o];
              this.ro.qiwangxinzi = true;
              continue;
            }
            if(o=='jiaoyubeijing'){
              this.ruleForm.jiaoyubeijing = obj[o];
              this.ro.jiaoyubeijing = true;
              continue;
            }
            if(o=='jianliwenjian'){
              this.ruleForm.jianliwenjian = obj[o];
              this.ro.jianliwenjian = true;
              continue;
            }
            if(o=='toudishijian'){
              this.ruleForm.toudishijian = obj[o];
              this.ro.toudishijian = true;
              continue;
            }
            if(o=='gongzuojingli'){
              this.ruleForm.gongzuojingli = obj[o];
              this.ro.gongzuojingli = true;
              continue;
            }
          }
        }else if(type=='edit'){
			this.info()
		}
        // 获取用户信息
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            var json = res.data.data;
            if((json.xueshengzhanghao!=''&&json.xueshengzhanghao) || json.xueshengzhanghao==0){
                this.ruleForm.xueshengzhanghao = json.xueshengzhanghao;
				this.ro.xueshengzhanghao = true;
            }
            if((json.xueshengxingming!=''&&json.xueshengxingming) || json.xueshengxingming==0){
                this.ruleForm.xueshengxingming = json.xueshengxingming;
				this.ro.xueshengxingming = true;
            }
            if((json.xingbie!=''&&json.xingbie) || json.xingbie==0){
                this.ruleForm.xingbie = json.xingbie;
				this.ro.xingbie = true;
            }
            if((json.nianling!=''&&json.nianling) || json.nianling==0){
                this.ruleForm.nianling = json.nianling;
				this.ro.nianling = true;
            }
            if((json.xueli!=''&&json.xueli) || json.xueli==0){
                this.ruleForm.xueli = json.xueli;
				this.ro.xueli = true;
            }
            if((json.xuekemenlei!=''&&json.xuekemenlei) || json.xuekemenlei==0){
                this.ruleForm.xuekemenlei = json.xuekemenlei;
				this.ro.xuekemenlei = true;
            }
            if((json.jiguan!=''&&json.jiguan) || json.jiguan==0){
                this.ruleForm.jiguan = json.jiguan;
				this.ro.jiguan = true;
            }
            if((json.shouji!=''&&json.shouji) || json.shouji==0){
                this.ruleForm.shouji = json.shouji;
				this.ro.shouji = true;
            }
            if((json.shenfenzheng!=''&&json.shenfenzheng) || json.shenfenzheng==0){
                this.ruleForm.shenfenzheng = json.shenfenzheng;
				this.ro.shenfenzheng = true;
            }
            if((json.jifen!=''&&json.jifen) || json.jifen==0){
                this.ruleForm.jifen = json.jifen;
				this.ro.jifen = true;
            }
          }
        });

		if (localStorage.getItem('raffleType') && localStorage.getItem('raffleType') != null) {
			localStorage.removeItem('raffleType')
			setTimeout(() => {
				this.onSubmit()
			}, 300)
		}
      },

    // 多级联动参数
      // 多级联动参数
      info() {
        this.$http.get(`yingpinxinxi/detail/${this.$route.query.id}`, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {
			//更新跨表属性
			var crossuserid;
			var crossrefid;
			var crossoptnum;
			this.$refs["ruleForm"].validate(valid => {
				if(valid) {
					if(this.type=='cross'){
						var statusColumnName = localStorage.getItem('statusColumnName');
						var statusColumnValue = localStorage.getItem('statusColumnValue');
						if(statusColumnName && statusColumnName!='') {
							var obj = JSON.parse(localStorage.getItem('crossObj'));
							if(!statusColumnName.startsWith("[")) {
								for (var o in obj){
									if(o==statusColumnName){
										obj[o] = statusColumnValue;
									}
								}
								var table = localStorage.getItem('crossTable');
								this.$http.post(table+'/update', obj).then(res => {});
							} else {
								crossuserid=Number(localStorage.getItem('frontUserid'));
								crossrefid=obj['id'];
								crossoptnum=localStorage.getItem('statusColumnName');
								crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
							}
						}
					}
					if(crossrefid && crossuserid) {
						this.ruleForm.crossuserid=crossuserid;
						this.ruleForm.crossrefid=crossrefid;
						var params = {
							page: 1,
							limit: 10,
							crossuserid:crossuserid,
							crossrefid:crossrefid,
						}
						this.$http.get('yingpinxinxi/list', {
							params: params
						}).then(res => {
							if(res.data.data.total>=crossoptnum) {
								this.$message({
									message: localStorage.getItem('tips'),
									type: 'error',
									duration: 1500,
								});
								return false;
							} else {
								// 跨表计算


								this.$http.post(`yingpinxinxi/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
									if (res.data.code == 0) {
										this.$message({
											message: '操作成功',
											type: 'success',
											duration: 1500,
											onClose: () => {
												this.$router.go(-1);
											}
										});
									} else {
										this.$message({
											message: res.data.msg,
											type: 'error',
											duration: 1500
										});
									}
								});
							}
						});
					} else {


						this.$http.post(`yingpinxinxi/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
							if (res.data.code == 0) {
								this.$message({
									message: '操作成功',
									type: 'success',
									duration: 1500,
									onClose: () => {
										this.$router.go(-1);
									}
								});
							} else {
								this.$message({
									message: res.data.msg,
									type: 'error',
									duration: 1500
								});
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
			this.$router.go(-1);
		},
      zhaopinfengmianUploadChange(fileUrls) {
          this.ruleForm.zhaopinfengmian = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },
      jianliwenjianUploadChange(fileUrls) {
          this.ruleForm.jianliwenjian = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  padding: 0 10px 0 0;
	  color: #666;
	  font-weight: 500;
	  width: 120px;
	  font-size: 14px;
	  line-height: 40px;
	  text-align: right;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 120px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  border: 1px solid #ddd;
	  padding: 0 12px;
	  color: #666;
	  font-size: 14px;
	  border-color: #ddd;
	  border-radius: 0px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  background: none;
	  width: auto;
	  border-width: 1px;
	  border-style: solid;
	  min-width: 300px;
	  height: 36px;
	}
	.add-update-preview .el-input-number /deep/ .el-input__inner {
		text-align: left;
	  border: 1px solid #ddd;
	  padding: 0 12px;
	  color: #666;
	  font-size: 14px;
	  border-color: #ddd;
	  border-radius: 0px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  background: none;
	  width: auto;
	  border-width: 1px;
	  border-style: solid;
	  min-width: 300px;
	  height: 36px;
	}
	.add-update-preview .el-input-number /deep/ .el-input-number__decrease {
		display: none;
	}
	.add-update-preview .el-input-number /deep/ .el-input-number__increase {
		display: none;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  border-radius: 0px;
	  padding: 0 10px;
	  color: #666;
	  background: none;
	  width: auto;
	  font-size: 14px;
	  border-color: #ddd;
	  border-width: 1px;
	  border-style: solid;
	  min-width: 350px;
	  height: 36px;
	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  border-radius: 0px;
	  padding: 0 10px 0 30px;
	  color: #666;
	  background: none;
	  width: auto;
	  font-size: 14px;
	  border-color: #ddd;
	  border-width: 1px;
	  border-style: solid;
	  min-width: 250px;
	  height: 36px;
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
	  border-radius: 2px;
	  color: #999;
	  background: none;
	  width: 80px;
	  font-size: 24px;
	  border-color: #ddd;
	  border-width: 1px;
	  line-height: 80px;
	  border-style: solid;
	  text-align: center;
	  height: 80px;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  cursor: pointer;
	  border-radius: 2px;
	  color: #999;
	  background: none;
	  width: 80px;
	  font-size: 24px;
	  border-color: #ddd;
	  border-width: 1px;
	  line-height: 80px;
	  border-style: solid;
	  text-align: center;
	  height: 80px;
	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  cursor: pointer;
	  border-radius: 2px;
	  color: #999;
	  background: none;
	  width: 80px;
	  font-size: 24px;
	  border-color: #ddd;
	  border-width: 1px;
	  line-height: 80px;
	  border-style: solid;
	  text-align: center;
	  height: 80px;
	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  border: 1px solid #ddd;
	  border-radius: 0px;
	  padding: 12px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  color: #666;
	  background: none;
	  width: 40%;
	  font-size: 14px;
	  height: 120px;
	}
</style>
