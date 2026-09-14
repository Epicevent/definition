// Stable IDs are independent of chapter order. Edges mean direct reading prerequisites.
const chapters=[
 ['A','공간과 위상','Spaces and topology'],['B','대수와 범주의 언어','Algebra and categories'],
 ['C','미분과 복소기하','Differential and complex geometry'],['D','층과 국소 자료','Sheaves and local data'],
 ['E','선다발과 인자','Line bundles and divisors'],['F','계량·연결·곡률','Metrics, connections and curvature'],
 ['G','복합체와 호몰로지 대수','Complexes and homological algebra'],['H','코호몰로지의 계산','Computing cohomology'],
 ['I','후속 연구의 별도 가지','Further study branches']
].map(([id,title,english])=>({id,title,english}));
const specification={
 A:`01-01:;01-02:01-01;01-03:01-01;01-04:01-01;01-05:01-04;
 06-01:01-01;06-02:01-02;06-03:01-01;
 12-01:01-02;12-02:01-03;12-03:12-01,12-02`,
 B:`02-01:;02-02:02-01;02-03:02-02;02-04:02-02;02-05:02-01;02-06:02-04,02-05;
 26-01:02-01;26-02:26-01;28-01:26-01;28-02:28-01;28-03:28-02;
 N01:02-01,26-01;N02:28-01,26-02;
 13-01:;13-02:13-01;13-03:13-01;13-04:13-01;
 14-01:13-01;14-02:13-01,02-01;14-03:14-01;14-04:14-01;
 14-05:14-03,14-04;14-06:14-03,14-04;15-01:13-01;
 14-07:14-02,14-03,14-04,14-05,14-06,15-01;
 B01:02-01;B02:B01;B03:B01`,
 C:`06-04:06-01,06-02,06-03;06-05:06-04,B01;06-06:06-05,B02;
 06-07:06-06;06-08:06-07;06-09:06-07;06-10:06-08,06-09;
 06-11:06-10;06-12:06-10;06-13:06-12;
 27-01:;27-02:06-01,06-02,06-03,27-01;
 B04:27-01,06-01,06-02,06-03;B05:06-07;B06:B04,B05,06-09,06-10;
 B07:B04,06-05,B02;N23:B04,B01`,
 D:`07-01:01-03,02-02;07-02:07-01;07-03:07-02;07-04:07-01;
 08-01:07-01;09-01:07-02,01-02;09-02:09-01;10-01:08-01,02-02;
 10-02:10-01,09-02;10-03:10-02,03-01;10-04:10-02;10-05:10-02;
 11-01:01-02;11-02:11-01,08-01;11-03:06-07,08-01;
 26-03:08-01,26-02;27-03:27-02,26-03;
 28-04:27-03,09-02;28-05:28-04,28-02;
 N03:26-03,09-02,28-03;N04:B04,08-01,26-03;
 N05:N01,N03,10-01;N06:N05,07-04,13-02;N07:N06,B02;
 28-06:27-01,26-01;28-07:26-01;28-08:28-01;28-09:28-08,28-04;28-10:28-08`,
 E:`N08:B04,B01;N09:N08,N04;N10:N09;
 N11:N08;N12:N08,B02;N13:27-02,28-03;N14:27-02;
 N15:N13,N14;N16:N14,N15;N17:N14;N18:N05,N07,N13,N14;
 N19:B07,B02,N08,N10;N20:N10,N13,N14,N19;N21:N10,N23`,
 F:`N28:N08,N10,B03;N29:N09,B05,06-10;
 B08:N09,B06;B09:N29,06-09;N30:N28,N29,B08,B09;
 B10:N19,N30;B11:N30;B12:B11,06-14`,
 G:`03-01:02-03,02-04;03-02:03-01;
 04-01:02-02;04-02:04-01,02-03;04-03:04-01,02-04;
 04-04:04-02,04-03,02-05;04-05:04-04;05-01:04-01;
 15-02:15-01;15-03:15-02;16-01:03-01,04-01;16-02:16-01,15-02;
 17-01:13-03,14-07;17-02:17-01,03-02;17-03:17-02,16-02,04-04;
 23-01:02-02;23-02:23-01,02-03;23-03:23-01,02-04;23-04:23-02,23-03,02-05`,
 H:`06-14:06-11,06-12,04-04;
 12-04:01-05,06-04;12-05:12-04,12-01,01-03;12-06:10-01,09-02,01-05;
 12-07:12-06,12-01;16-03:16-01,12-07;
 18-01:07-03,10-01,13-03;18-02:18-01,17-03;19-01:18-02;19-02:19-01,16-01;
 20-01:01-03,08-01;20-02:20-01;21-01:20-02,04-04;
 21-02:21-01,12-02;22-01:19-01,01-03;
 24-01:B01;24-02:24-01,06-01;24-03:24-02,02-01;24-04:24-03;
 24-05:24-04,23-04;24-06:24-03,02-02;24-07:24-06,24-04;24-08:24-07,04-04;
 25-01:;25-02:25-01,23-01;25-03:25-02,23-04;25-04:25-02,04-04;
 25-05:25-01,01-03;25-06:06-01;25-07:25-06,01-03;N22:18-02,B01`,
 I:`N24:N23,26-01;N25:N23,B02;N26:N23,B03;N27:N25,N26,B02`
};
const graph={};for(const [chapter,s] of Object.entries(specification))for(const row of s.split(';')){
 const [id,ds]=row.trim().split(':');if(id)graph[id]={chapter,deps:ds?ds.split(','):[]};
}
const definitions=[];
function add(id,title,english,question,answer,condition){definitions.push({id,title,english,question,answer,condition,type:'definition',source:'체계화 보충 '+id});}
add('B01','실수·복소 벡터공간','Real and complex vector space','벡터공간에서 스칼라는 무엇이며 어떤 법칙을 만족하는가?',String.raw`체 \(k=\mathbb R\) 또는 \(\mathbb C\)를 고정한다. k-벡터공간은 아벨군 V와 스칼라곱 \(k\times V\to V\)로, 모든 \(a,b\in k\), \(u,v\in V\)에 대해 \(a(u+v)=au+av\), \((a+b)v=av+bv\), \((ab)v=a(bv)\), \(1v=v\)를 만족한다. k-선형사상은 덧셈과 이 스칼라곱을 보존한다.`,'실수 선형성과 복소 선형성을 구별한다. 체 자체와 집합·함수는 기초 배경으로 사용한다.');
add('B02','쌍대·텐서곱·외대수','Dual, tensor product and exterior power','선형함수와 다중선형함수를 어떤 벡터공간으로 표현하는가?',String.raw`k-벡터공간 V의 쌍대는 \(V^*=\operatorname{Hom}_k(V,k)\)이다. \(V\otimes_kW\)는 쌍선형사상 \(b:V\times W\to V\otimes_kW\)와 함께, 모든 k-벡터공간 Z와 쌍선형사상 f에 대해 유일한 선형사상 \(\widetilde f:V\otimes_kW\to Z\)가 \(f=\widetilde f\circ b\)를 만족하는 공간이다. \(\bigwedge^qV\)는 같은 보편성에서 입력을 \(V^q\), 사상을 교대 q-다중선형사상으로 바꾼 공간이다. \(\bigwedge^0V=k\).`,'교대란 두 입력이 같으면 값이 0이라는 뜻이다. 여기서 k는 실수체 또는 복소수체이다. 이 항목은 공통 선형대수 배경을 모은 참조 항목이다.');
add('B03','Hermitian 내적','Hermitian inner product','양의 정부호 Hermitian 형식의 선형성 규약은?',String.raw`복소벡터공간 V 위 형식 \(h:V\times V\to\mathbb C\)가 첫 인자에 복소선형, 둘째 인자에 켤레선형이고, 모든 u,v에 대해 \(h(u,v)=\overline{h(v,u)}\), 모든 \(v\ne0\)에 대해 \(h(v,v)>0\)이면 Hermitian 내적이다.`,'이 정의집은 첫 인자에 선형인 규약을 사용한다. 양의 정부호 조건을 생략하지 않는다.');
add('B04','복소다양체','Complex manifold','복소좌표의 겹침에서 무엇을 요구하는가?',String.raw`복소 n차원 다양체는 Hausdorff 제2가산 위상공간 X와 최대 복소 좌표계 모음이다. 좌표 \(\varphi_i:U_i\to V_i\subset\mathbb C^n\)는 열린집합 사이의 위상동형이고 \(\bigcup_iU_i=X\)이며, 모든 겹침에서 \(\varphi_j\circ\varphi_i^{-1}\)는 쌍정칙이다. 쌍정칙은 사상과 역이 정칙이라는 뜻이다. 여러 복소변수에서 정칙은 각 성분이 각 점 근방에서 수렴하는 복소 거듭제곱급수로 표현된다는 뜻이다.`,'정칙사상은 이 좌표들에서 성분별 정칙인 사상이다. N04에 포함된 다양체 정의를 독립적으로 찾을 수 있게 분리했다.');
add('B05','복소값 미분형식','Complex-valued differential form','실수 접벡터를 입력받는 복소값 형식은?',String.raw`매끄러운 실수다양체 M에서 복소값 k-형식은 각 p에 교대 실수 k-다중선형사상 \(\omega_p:(T_pM)^k\to\mathbb C\)를 주되 모든 좌표 성분이 매끄러운 족이다. 유일하게 \(\omega=\alpha+i\beta\)로 쓰며 α,β는 실수값 k-형식이다. \(d\omega=d\alpha+i\,d\beta\)로 외미분을 확장한다. 0-형식은 매끄러운 복소값 함수이다.`,'복소값이라는 말이 실수 접공간에 복소선형성을 요구한다는 뜻은 아니다. L값 형식은 N29에서 정의한다.');
add('B06','형식의 형식차수와 Dolbeault 연산자','Bidegree and Dolbeault operators','(p,q)-형식과 ∂, ∂̄는 무엇인가?',String.raw`복소 n차원 다양체에서 매끄러운 (p,q)-형식은 정칙좌표마다 \(\sum_{|I|=p,|J|=q}a_{IJ}\,dz^I\wedge d\bar z^J\)로 표현되는 복소값 형식이다. 계수는 매끄럽다. 외미분의 형식차수 (p+1,q) 성분을 ∂, (p,q+1) 성분을 ∂̄라 한다. 따라서 \(d=\partial+\bar\partial\). 함수에 대해 \(\partial f=\sum_j\frac12(f_{x_j}-if_{y_j})dz^j\), \(\bar\partial f=\sum_j\frac12(f_{x_j}+if_{y_j})d\bar z^j\)이다.`,'(p,q)는 미분형식의 두 종류 입력에 대한 차수이다. 선다발의 degree와 구별한다.');
add('B07','정칙 접다발과 여접다발','Holomorphic tangent and cotangent bundles','T¹⁰X와 그 쌍대는 어떻게 붙이는가?',String.raw`복소 n차원 다양체 X의 정칙 접다발 \(T^{1,0}X\)는 정칙좌표에서 \(\partial/\partial z^1,\ldots,\partial/\partial z^n\)을 기저로 하고 좌표변환의 복소 Jacobian에 의한 연쇄법칙으로 붙인 rank n 정칙 벡터다발이다. 각 섬유의 복소선형 쌍대를 취하면 정칙 여접다발이며 쌍대 기저는 \(dz^1,\ldots,dz^n\)이다. 정칙 벡터다발은 N08의 국소자명화 정의에서 섬유를 \(\mathbb C^n\)으로 바꾼 것이다.`,'실수 접다발 TX와 복소 rank n의 T¹⁰X를 구별한다. 여기서는 Jacobian으로 붙이는 구성을 사용한다.');
add('B08','정칙 선다발의 Dolbeault 연산자','Dolbeault operator on a holomorphic line bundle','∂̄L은 매끄러운 단면에 어떻게 작용하는가?',String.raw`정칙 선다발 L의 정칙 국소 기저 e에 대해 \(\bar\partial_L(fe)=(\bar\partial f)\otimes e\)로 정의한다. 이는 매끄러운 단면을 매끄러운 L값 (0,1)-형식으로 보내는 제한과 호환되는 복소선형 연산이다. e는 정칙이고 f는 매끄러운 복소값 함수이다. 연결 ∇의 (0,1) 성분은 그 L값 1-형식 출력의 (0,1) 성분을 취한 연산이다.`,'기저를 임의의 매끄러운 기저로 바꾸어 이 식을 그대로 쓰지 않는다. 정칙 전이함수의 ∂̄가 0이어서 이 정의가 붙는다.');
add('B09','선다발 연결의 곡률','Curvature of a line bundle connection','연결을 두 번 적용한다는 말을 어떻게 정의하는가?',String.raw`연결 ∇를 L값 형식에 \(\nabla(\alpha\otimes s)=d\alpha\otimes s+(-1)^k\alpha\wedge\nabla s\)로 확장한다. 여기서 α는 복소값 k-형식이다. 단면 s에 대해 \(\nabla^2s=F_\nabla\otimes s\)를 만족하는 전역 복소값 2-형식 \(F_\nabla\)를 곡률이라 한다. 선다발의 섬유 자기준동형은 자연스럽게 복소 스칼라이므로 이렇게 표현된다. 국소 기저에서 \(\nabla e=A_e\otimes e\)이면 \(F_\nabla=dA_e\)이다.`,'Aₑ는 국소 기저에 의존하고 곡률은 전역 형식이다. rank 1이므로 Aₑ∧Aₑ=0이다.');
add('B10','정준선다발의 Chern 곡률','Chern curvature of the canonical line bundle','발표에서 적분하는 곡률은 어떤 자료에서 정해지는가?',String.raw`리만곡면 X의 정준선다발 \(K_X\)에 매끄러운 Hermitian 계량 h를 고른다. 이 쌍의 Chern 연결을 \(\nabla^{\mathrm{Ch}}\)라 할 때 곡률 \(F_{K_X,h}:=F_{\nabla^{\mathrm{Ch}}}\)이다. 정칙좌표 z의 기저 dz에 대해 \(h_z=h(dz,dz)\)라 쓰면 \[F_{K_X,h}=-\partial\bar\partial\log h_z.\]이는 전역 복소값 (1,1)-형식이다.`,'Kₓ만으로 하나의 곡률형식이 정해지지는 않는다. h를 지정해야 한다. 가우스 곡률이라는 실수함수와 동일한 대상이 아니다.');
add('B11','첫째 Chern 형식','First Chern form','곡률 적분에 붙이는 정규화는?',String.raw`정칙 선다발 L과 매끄러운 Hermitian 계량 h의 Chern 곡률을 \(F_{L,h}\)라 할 때 첫째 Chern 형식은 \[c_1(L,h)=\frac{i}{2\pi}F_{L,h}\]이다. 이 규약에서 이는 닫힌 실수값 (1,1)-형식이다.`,'i/(2π)와 1/(2πi)는 부호가 다르다. 형식 자체와 그 코호몰로지류를 구별한다.');
add('B12','실수 첫째 Chern 류','Real first Chern class','첫째 Chern 형식에서 어떤 동치류를 취하는가?',String.raw`정칙 선다발 L의 실수 첫째 Chern 류는 Hermitian 계량 h를 골라 \[c_1(L)_{\mathbb R}:=[c_1(L,h)]\in H^2_{\mathrm{dR}}(X;\mathbb R)\]로 정의한다. 다른 계량은 같은 류를 준다. 이 항목에서는 정수 계수 위상적 Chern 류가 아니라 그 실수 de Rham 표현을 다룬다.`,'계량 독립성은 정의의 정당화에 필요한 사실이다. 연결 정리 T09에서 형식의 차이가 완전형식임을 따로 명시한다.');
const extraTheorems=[
 {id:'T09',title:'계량 독립성과 곡률 적분',english:'Metric independence and degree',answer:String.raw`두 Hermitian 계량이 \(h'=e^\psi h\)로 연결되면 ψ는 전역 매끄러운 실함수이며 \(F_{h'}-F_h=d(\partial\psi)\)이다. 따라서 첫째 Chern 형식의 차이는 실수 완전형식이다. 연결된 콤팩트 리만곡면에서 선다발 L의 영이 아닌 유리형 단면 s를 택하면 \(\frac{i}{2\pi}\int_XF_{L,h}=\sum_p\operatorname{ord}_p(s)\). 첫째 등식은 국소 공식으로, 적분 등식은 영점·극을 제거한 영역에서 Stokes 정리로 확인한다.`,deps:['B11','06-12','N20','N17']},
 {id:'T10',title:'P¹ 발표의 세 표현',english:'Three descriptions on the projective line',answer:String.raw`\(w=1/z\)에서 \(dw=-z^{-2}dz\)이고 \(\operatorname{div}(dz)=-2[\infty]\)이다. 따라서 \(K_{\mathbf P^1}\simeq\mathcal O(-2)\)이며 \(\frac{i}{2\pi}\int_{\mathbf P^1}F_{K,h}=-2\). 전이함수의 winding, 인자의 차수, 곡률 적분을 연결하는 계산 결과이며 세 용어의 정의를 동일시하지 않는다.`,deps:['B10','B11','N20','N21']}
];
module.exports={chapters,graph,definitions,extraTheorems};
