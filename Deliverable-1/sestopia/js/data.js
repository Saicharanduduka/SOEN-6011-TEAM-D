const pageNotFoundMessage = `
<div class="col-10">
<h2 class="pb-3">Page Not Found</h2>
<p>
<a href="./index.html">Return Home</a>
</p>
</div>
`;

const content = [{
        title: `Home Page`,
        description: `TODO: Description`,
        text: `
	<div class="row justify-content-center text-center">
	<div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
	<a href="?page=Software Design">
	<img src="icons/research.png" class="img-fluid skill-icon" alt="Software Design skill icon">
	<p class="text-capitalize"><strong>Software Design</strong></p>
	</a>
	</div>
	<div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
	<a href="?page=Software Quality">
	<img src="icons/file.png" class="img-fluid skill-icon" alt="Software Quality skill icon">
	<p class="text-capitalize"><strong>Software Quality</strong></p>
	</a>
	</div>
	<div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
	<a href="?page=Software Maintenance">
	<img src="icons/code.png" class="img-fluid skill-icon" alt="Software Maintenance skill icon">
	<p class="text-capitalize"><strong>Software Maintenance</strong></p>
	</a>
	</div>
	<div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
	<a href="?page=Software Process Measurement">
	<img src="icons/engineering.png" class="img-fluid skill-icon" alt="Process Measurement skill icon">
	<p class="text-capitalize"><strong>Software Process Measurement</strong></p>
	</a>
	</div>
	<div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
	<a href="?page=Software Testing">
	<img src="icons/test.png" class="img-fluid skill-icon" alt="Software Testing skill icon">
	<p class="text-capitalize"><strong>Software Testing</strong></p>
	</a>
	</div>
	<div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
	<a href="?page=Software Requirements">
	<img src="icons/text.png" class="img-fluid skill-icon" alt=" Software Requirements skill icon">
	<p class="text-capitalize"><strong>Software Requirements</strong></p>
	</a>
	</div>
	<div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
	<a href="?page=Software Engineering Management">
	<img src="icons/influencer.png" class="img-fluid skill-icon" alt="Software Engineering Management Skill icon">
	<p class="text-capitalize"><strong>Software Engineering Management</strong></p>
	</a>
	</div>
	<div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
	<a href="?page=Computing Foundations">
	<img src="icons/problem.png" class="img-fluid skill-icon" alt="Computing Foundation skill icon">
	<p class="text-capitalize"><strong>Computing Foundations</strong></p>
	</a>
	</div>
	</div>
	`,
    },
    {
        title: `About Us`,
        description: `Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. `,
        text: `<p>Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. Maecenas sit amet nisl arcu. Aenean sagittis tempor felis, at facilisis nulla mattis vel. Duis sed magna cursus, pharetra enim a, vehicula sem. Phasellus velit ex, porttitor quis tempor in, congue sed felis. Aliquam accumsan tellus ac lectus porta dictum. Duis imperdiet, purus id ultricies ullamcorper, quam nibh dictum felis, sit amet volutpat enim arcu et lacus. In eget massa feugiat metus laoreet varius. Praesent finibus eget nunc ut finibus. Praesent vitae tincidunt orci. Pellentesque vulputate nisl sed nunc tempor blandit.</p><p><a href="./index.html">Return Home</a></p>`,
    },
    {
        title: `Software Design`,
        description: `User Research is the study of users which include their needs and what they want. User researchers find crucial information that will lead them to design good UI. `,
        text: `<hr style="solid 5px #bbb"></hr>
		
	<h2>Index</h2>
	<div class="boxsm" id="index">
		<ol>
			<li><a href="#nos"> Name of Skill.</a></li>
			<li><a href="#cos"> Classification of Skill.</a></li>
			<li><a href="#pfs"> Prerequisites for Skill.</a></li>
			<li><a href="#rsfea"> Related Software Engineering Area(s).</a></li>
			<li><a href="#rafs"> Rationale for Skill. </a></li>
			<li><a href="#rofs"> Roles for Skill.</a></li>
			<li><a href="#wrts"> Work Related to Skill.</a></li>
			<li><a href="#rwe"> Real-World Example/Scenario of Skill.</a></li>
			<li><a href="#roai"> Role of Academia or Industry in Cultivating the Skill.</a></li>
			<li><a href="#tsts"> Tools Supporting the Skill.</a></li>
			<li><a href="#ssa"> Skill Self-Assessment.</a></li>
			<li><a href="#r"> References.</a></li>
		</ol>	
	</div>


	<div class="sm" id="nos">
		<h2  class="sm"> <a href="#index"> User Research and Personas </a></h2>
		<div class="author"><I> -by Pooja Dhir</I></div><br>
		<img class="responsive" src="images/sd/urandp.png" style="float:right; width:30% ">
		<p style="margin-right:40px">
		User Research is the study of users which include their needs and what they want. User researchers find crucial information that will lead them to design good UI.<br>
		Personas are fictional characters that are created using user research which might use your product, service, site, etc. It helps the designer to understand the user's needs, experiences, behaviors, and goals.
		</p>
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="cos">
		<h2  class="sm"> <a href="#index"> Classification of Skill</a> </h2>
		User research can be classified into two categories:<br><br>
<b>A) Quantitative research</b><br>
In quantitative techniques, for example, surveys, investigation, and formal trials, the researcher tries to quantify parts of users and user behavior in a manner that can be measured and used for factual examination. Best practice for quantitative strategies is to gather target estimations that are unbiased by the researcher’s theories, presence, and personality. Getting an example of users who can represent the entire user population in a factually important manner regularly requires many research participants. Quantitative Research utilizes quantifiable information to detail realities and reveals designs in research. Quantitative data collection techniques are considerably more organized than Qualitative data collection methods.<br><br>
<b>B) Qualitative research</b><br>
Qualitative techniques, for example, interviews, case studies, observation, group discussion, open-ended questionnaires, and (somewhat) ease of use tests are frequently more exploratory and look to get a more inside and out comprehension of the individual users’ or user group’s experiences, motivations, and regular daily existences. In qualitative methods, the researcher acknowledges that he/she is somewhat a co-maker of research results, so the outcomes are not totally objective and reproducible. The results of qualitative research are normally not communicated numerically, yet rather as topics or classifications that have happened during the research. It is used to increase an understanding of fundamental reasons, opinions, and motivations. It gives bits of knowledge into the issue or assists with creating thoughts or theories for potential quantitative research. Qualitative Research is additionally used to reveal patterns in thought and opinions, and dive deeper into the issue. It gives detailed information including knowledge about behavior, attitude, and aptitude of the user.<br>

		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="pfs">
		<h2  class="sm"><a href="#index"> Prerequisites for Skill</a> </h2>
				
		<ul class="sm" style="width:70%">
		<li>Experience conducting user research</li>
		<li>Experience with qualitative and user-centered design methodologies</li>
		<li>Working knowledge of quantitative, behavioral analysis and statistics</li>
		<li>Surveys and formal experiments</li>
		<li>Critical-thinking and problem-solving skills</li>
		</ul> 
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="rsfea">
		<h2  class="sm"> <a href="#index">Related Software Engineering Area(s) </a> </h2>
		<ul class="sm" style="width:50%">
		<li>Software Requirements</li>
		<li>Software Quality</li>
		<li>Software Engineering Professional Practice</li>
		</ul> 
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="rafs">
		<h2  class="sm"> <a href="#index">Rationale for Skill</a> </h2>
		<div class="box">"Empathy is at the heart of design. Without the understanding of what others see, feel, and experience, design is a pointless task."<br>
		<i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Tim Brown, CEO of the innovation and design firm IDEO</i></div>
		<b>1. To Create Designs That are Truly Relevant</b><br><br>
User research is the best way to accomplish an understanding of the individuals who are going to utilize your design. If you get what user wants, you can make design that are relevant to them. But in case you don't have an clear idea of your users understanding, you have no way of knowing whether your design will be relevant. A design that isn't applicable to its target users will never be a success.<br><br>

<b>2. To Create Designs That are Easy and Pleasurable to Use</b><br>
<div class="box">"If the user is having a problem, it’s our problem.”<br>
<i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Steve Jobs, co-founder of Apple Computers</i></div><br>
Products should have a significant level of usability and user tests can be a major assistance in accomplishing that. People expect that products should be easy to learn and easy to use. They hope to get them and get things done with them while just considering what they would like to accomplish, not having to think about the products themselves. If your user experience is not good, than there is a possibility that people will move on with another product. Except the fact that you are working in a field with no competitors, a significant level of usability is essential in making any product a commercial success. Also, people will cherish you for making an extraordinary user experience. Regardless of whether you are designing products for a highly specialized work environment where the users have no other options, products with a significant level of usability will make work forms quicker, more secure and more efficient.<br><br>
<b>3. To Understand the Return on Investment of Your UX Design</b></br><br>
In spite of the fact that the significance of good design has widely recognized, UX designers and researchers still fight for resources to enable them to accomplish their work. Executives and stakeholder fails sometime to see the value in putting resources in user research and UX design. If resources become scant, UX is likewise regularly one of the first areas to experience cuts; the explanation is that results are not as promptly felt as when you save on development or similar areas. In software development we can see the bugs immediately but in UX we don't experience the consequences until the product reaches the users. In spite of the fact that we can argue for the value of great UX, it is substantially more viable if we can show it. This is the place studies to show the return on investment (ROI) on UX efforts are extremely valuable. If you can show that the progressions you made in the design created more sales, brought about a bigger number of customers, or made work forms progressively effective, you have a lot more stronger case for putting resources in UX. User studies to quantify the impact of your design are mostly quantitative and can take various forms. <br>



		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="rofs">
	<h2  class="sm"><a href="#index"> Roles for Skill</a> </h2>
	<ul class="sm" style="width:100%">
		<li><b>UX Researcher</b> – Study the requirements of target user and create personas</li>
		<li><b>Information Architect</b> – They ensure a positive user experience by making the information accessible, logical and well organized.</li>
		<li><b>Usability analyst</b> – They focus on a very specific aspect of user experience :Usability</li>
		<li><b>UX writer</b> – They are the interaction between user experience design, copywriting and branding.</li>
		<li><b>UX Designer</b> – They conduct user research, design, write ux copy, validate/test with user and sell/present the design solution to the business.</li>
		</ul> 
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="wrts">
		<h2  class="sm"> <a href="#index">Work Related to Skill </a></h2>

		<ul class="sm" style="width:50%">
		<li>Brainstorming</li>
		<li>Usability testing</li>
		<li>Field studies</li>
		<li>Analytical Evaluation</li>
		</ul> 

		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="rwe">
		<h2  class="sm"><a href="#index"> Real-World Example</a> </h2>

		<center><img class="real" src="images/sd/UserResearchExample.png" style="height:30%; width:60%" class="responsive">
		<figcaption>Usability Lab</figcaption></center>
		This is the real world scenario where the user is being monitored. It involves recording the performance of the user doing typical tasks. This research is in a controlled environment setting. The person sitting inside with the user is evaluating user satisfaction using questionnaires and interviews. Goals and questions focus on how well she understands the product and perform a task. This testing is done with the goal that we can comprehend what changes are expected to cause things to go in the correct way.
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="roai">
		<h2  class="sm"> <a href="#index">Role of Academia or Industry in Cultivating the Skill</a> </h2>
		<b>Academia </b><br>
What we understand in Academic courses is that user research is all about recording videos, audios, gathering information from users about their needs. Most popular surveys, interviews, questionnaires, observation, studying documentation, etc are enough to be a UX Researcher. But in the real-world it is more than that. One should know the Design Principles, Usability principles, Mental Model, Personas, etc which includes the requirement and how to make a good design.<br>
<b>Industry</b><br>
While in industry researcher builds information about their users to serve the user network they work, but their approach is heavily influenced by the company’s business plan. The business benefit is determined by conveying value to the user, for instance, research to design a better customer experience will contribute to uplift in usage, patronage, and profit. Benefit, competition, and innovation shape the approach of the Industry UX Researcher.<br>

		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="tsts">
		<h2  class="sm" ><a href="#index"> Tools Supporting the Skill</a> </h2>
		There are many tools which support the skill. But here are some best tools which help to make UX researchers jobs easy. <br>

				<div class="row" style="padding-top:70px">
			
							<div class="column">
				<div class="card" style="min-height: 620px;">
					<h4><center><a href="https://www.bugsee.com/"  target="_blank" style = "width:45%;  display:flex;">Bugsee</a></center></h4>
					<center><a href="https://www.bugsee.com/"  target="_blank" ><img src="images/sd/bugsee.png" style="height:30%; width:60%" class="responsive"></a></center>
					<br><br>
					<p>Bugsee is a mobile analytics solution that focuses mostly on bug/crash reporting. It provides mobile professionals with tools like crashed session recordings, console logs, and network traffic analysis, all of which permit you and your team to track bug/crashes more efficiently and save time and resources.</p>
					
				</div>
			</div>

						<div class="column">
				<div class="card" style="min-height: 620px;">
				<h4><center><a href="https://lookback.io/"  target="_blank" style = "width:45%;  display:flex;">Lookback.io</a></center></h4>
				<center><a href="https://lookback.io/"  target="_blank" ><img src="images/sd/lookback.png" style="height:30%; width:60%" class="responsive"></a></center>
				<br><br>
					<p>Lookback.io is a versatile user-research platform, permitting UI/UX designers and mobile professionals to perform remote user research, communicate with users in real-time, perform individual test research on user’s end with pre-defined goals.Lookback.io also provides its users a strong dashboard where they can monitor their movement and replay tests at any given time.</p>
				</div>
			</div>


			<div class="column">
				<div class="card" style="min-height: 620px;">
				<h4><center><a href="https://www.smaply.com/"  target="_blank" style = "width:45%;  display:flex;">Smaply</a></center></h4>
				<center><a href="https://www.smaply.com/"  target="_blank" ><img src="images/sd/smaply.png" style="height:30%; width:60%" class="responsive"></a></center><br>
				<br>
			
					<p>Smaply helps you to create personas. You can create a clear persona for your user which holds the information of the user. They are easy to duplicate and edit, and you can quickly switch between multiple personas and export them as PDF.</p>
				</div>
			</div>

			<div class="column">
				<div class="card" style="min-height: 620px;">
					<h4><center><a href="https://xtensio.com/how-to-create-a-persona/"  target="_blank" style = "width:45%;  display:flex;">Xtensio</a></center></h4>
					<center><a href="https://xtensio.com/how-to-create-a-persona/"  target="_blank" ><img src="images/sd/xtensio.png" style="height:30%; width:60%" class="responsive"></a></center>
					<br><br><br>
					<p>Xtensio is used to create personas. It is the easy and simplest way to create. Not only persona it helps to create pitches, sales sheets, reports, case studies, agendas and more. It is used by Agencies, Consultancies, Startups, Sales team, Educators and teachers.
					Some templates are free while some are paid.</p>
					
				</div>
			</div>
		</div>

		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="ssa">
		<h2  class="sm"><a href="#index"> Skill Self-Assessment </a></h2>
		<b>6</b><br>
User research and persona is one of the important skill to start any project. If you don’t know what your user wants you to end with making an unsuccessful product. I have taken the subject “Human-Computer Interface Design” where I discovered how good design plays a role in successful products. Therefore, this subject has given me the opportunity to learn in-depth and enhance my knowledge in this area. But, this skill is a part of UI development. In order to self assess my score to 10 I would want to gain proficiency with all skills that come in UI development, which will give a kick start to my career.

		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="r">
		<h2  class="sm"> <a href="#index">References</a> </h2>

		<ul>
		<li><a href="https://www.interaction-design.org/literature/topics/personas" target="_blank" style="color:blue">https://www.interaction-design.org/literature/topics/personas</a></li>

		<li><a href="https://www.interaction-design.org/literature/article/best-practices-for-qualitative-user-research" target="_blank" style="color:blue">https://www.interaction-design.org/literature/article/best-practices-for-qualitative-user-research</a></li>

		<li><a href="https://www.springboard.com/blog/becoming-a-ux-researcher/#:~:text=Experience%20conducting%20user%20research,thinking%20and%20problem%2Dsolving%20skills" target="_blank" style="color:blue">https://www.springboard.com/blog/becoming-a-ux-researcher/#:~:text=Experience%20conducting%20user%20research,thinking%20and%20problem%2Dsolving%20skills</a></li>

		<li><a href="https://www.invisionapp.com/inside-design/5-ux-specialties/" target="_blank" style="color:blue">https://www.invisionapp.com/inside-design/5-ux-specialties/</a></li>

		<li><a href="https://usabilitygeek.com/best-ux-tools-user-research-user-testing-2018/" target="_blank" style="color:blue">https://usabilitygeek.com/best-ux-tools-user-research-user-testing-2018/</a></li>

		<li><a href="https://medium.com/@kate.r.storey/industry-ux-researcher-vs-academic-hci-researcher-d13a7283fbf0" target="_blank" style="color:blue">https://medium.com/@kate.r.storey/industry-ux-researcher-vs-academic-hci-researcher-d13a7283fbf0</a></li>

		<hr class="smSolid" ></hr>
	</div>	`,


    },
    {
        title: `Software Quality`,

        description: `<hr border-top: 3px solid #bbb;>Conducting reviews and audits is skill in the knowledge area software quality</hr><br> `,
        text: `
<hr style="solid 5px #bbb"></hr>
<h2>Index</h2>
<div class="boxsm" id="index">
<ol>
<li><a href="#nos"> Name of Skill.</a></li>
<li><a href="#cos"> Classification of Skill.</a></li>
<li><a href="#pfs"> Prerequisites for Skill.</a></li>
<li><a href="#rsfea"> Related Software Engineering Area(s).</a></li>
<li><a href="#rafs"> Rationale for Skill. </a></li>
<li><a href="#rofs"> Roles for Skill.</a></li>
<li><a href="#wrts"> Work Related to Skill.</a></li>
<li><a href="#rwe"> Real-World Example/Scenario of Skill.</a></li>
<li><a href="#roai"> Role of Academia or Industry in Cultivating the Skill.</a></li>
<li><a href="#tsts"> Tools Supporting the Skill.</a></li>
<li><a href="#ssa"> Skill Self-Assessment.</a></li>
<li><a href="#r"> References.</a></li>
</ol>
</div>




<div class="sm" id="nos">

<h2  class="sm"> <a href="#index"> Conducting Reviews and Audits</a> </h2>
- By Neha Dighe
<br>
<hr style="solid 5px #bbb"></hr>
<img src="images/sq/review.png" class="responsive" style="float:right; width:30% ">
<p style="margin-right:40px">
Reviews and audit processes are broadly defined
as static—meaning that no software programs or
models are executed—examination of software
engineering artifacts with respect to standards that
have been established by the organization or project for those artifacts. Different types of reviews
and audits are distinguished by their purpose, levels of independence, tools and techniques, roles,
and by the subject of the activity. Product assurance and process assurance audits are typically
conducted by software quality assurance (SQA)
personnel who are independent of development teams. Management reviews are conducted by
organizational or project management.<a href="https://www2.deloitte.com/za/en/pages/risk/articles/quality-assurance-reviews.html"  target="_blank"><b>[4]</b></a>
</p>

<hr class="smSolid" ></hr>
</div>


<div class="sm" id="cos">
<h2  class="sm"> <a href="#index">Classification of Skill </a></h2>
<hr style="solid 5px #bbb"></hr>

<div class="row" style="margin-bottom:40px">

</div>


<div class="row">
<p>Reviews and audit are generally classified of 4 types</p>
</div>

<div class="row">
<div class="col">
<ul >
<li><b>Management Reviews:</b></br>  Management reviews compare actual project results against plans to determine the status of projects or maintenance efforts. The main parameters of management reviews are project cost, schedule, scope, and quality.</li>
<li><b>Technical Reviews:</b></br> The purpose of a technical review is to evaluate a software product by a team of qualified personnel to determine its suitability for its intended use and identify discrepancies from specifications and standards. It provides management with evidence to confirm the technical status of the project.</li>
<li><b>Inspections:</b></br> The purpose of an inspection is to detect and identify software product anomalies. Software inspections always involve the author of an intermediate or final product; other reviews might not. Inspections also include an inspection leader, a recorder, a reader, and a few (two to five) checkers (inspectors). The members of an inspection team may possess different expertise, such as domain expertise, software design method expertise, or programming language expertise.</li>
<li><b>Walkthroughs:</b></br> The purpose of a systematic walk-through is to evaluate a software product. A walkthrough may be conducted for the purpose of educating an audience regarding a software product.</li>
</ul>
</div>
<div class="col">
<img src="images/sq/types.png" class="responsive">
</div>

</div>



<hr class="smSolid" ></hr>
</div>


<div class="sm" id="pfs">
<h2  class="sm"> <a href="#index">Prerequisites for Skill</a> </h2>
<hr style="solid 5px #bbb"></hr>

<ul class="sm" style="width:50%">
<li>Knowledge of Business requirements</li>
<li>Knowledge of user stories</li>
<li>Understanding of sprint goal and scope of project</li>
<li>Functional  Understanding of the system</li>
</ul>  
<hr class="smSolid" ></hr>
</div>


<div class="sm" id="rsfea">
<h2  class="sm" ><a href="#index"> Related Software Engineering Area(s) </a> </h2>
<hr style="solid 5px #bbb"></hr>
<ul class="sm" style="width:70%">
<li>Software Requirements</li>
<li>Software Quality Assurance</li>
<li>Software Maintenance</li>
<li>Software Testing Life Cycle</li>
</ul>


<hr class="smSolid" ></hr>
</div>


<div class="sm" id="rafs">
<h2  class="sm"> <a href="#index">Rationale for Skill</a> </h2>
<hr style="solid 5px #bbb"></hr>
<p style="width:80%">
The objective of quality audit and review is to verify the compliance of the department/organization to the defined Quality Management system and requirements of ISO 9001. Also, it provides the assurance and confidence to the management that the processes of the organization are being complied. Another important objective is to identify and highlight the non compliances to the required levels within the organization so that they are acted upon promptly.
</p>
<p style="width:80%">
It verifies that each and every element of the system be audited yearly to make sure that each element has been implemented according to the standard’s requirement, and that the elements are applied to the company’s operations properly. In addition, external auditors from the certifying body will audit the system annually to ensure that the system still meets accreditation requirements.
</p>

<h5 style="margin-top:60px; margin-bottom:30px">Reasons to use ?</h5>
<ul style="width:70%">
<li>To review the project plan.</li>
<li>To review the software requirements specification.</li>
<li>To review the test design plan.</li>
<li>To review the overall test report before finally deploying the product.</li>
<li>To analyse whether no aspect is left behind while closing the project.</li>
</ul>
<hr class="smSolid" ></hr>
</div>


<div class="sm" id="rofs">
<h2  class="sm"> <a href="#index">Roles for Skill </a></h2>
<hr style="solid 5px #bbb"></hr>

<ul class="sm" style="width:70%">
<li>Decision maker </li>
<li>Review leader</li>
<li>Recorder</li>
<li>Checkers</li>
</ul>

<hr class="smSolid" ></hr>
</div>


<div class="sm" id="wrts">
<h2  class="sm"> <a href="#index">Work Related to Skill </a></h2>
<hr style="solid 5px #bbb"></hr>
<ul class="sm" style="width:70%">
<li>Examination of software engineering artifacts with respect to standards that have been established by the organization or project for those artifacts.</li>
<li>Audit: Detailed testing and substantiating of balances</li>
<li>Review: Enquiries and analysis, less detailed</li>
</ul>
<hr class="smSolid" ></hr>
</div>


<div class="sm" id="rwe">
<h2  class="sm"><a href="#index">Real-World Example</a></h2>
<hr style="solid 5px #bbb"></hr>

<h5></h5>
<div class="row" style="margin-top:30px">
<div class="col"></div>
<div class="col"></div>
</div>

<h5> Reviews and audit of Daily Cash Reports </h5>
<div class="row" style="margin-top:30px">
<div class="col" >
On a most basic level, auditing and review involves one person checking another person's work. In an organization in which at least one person handles cash, there's the need for a daily cash report. When one employee totals up all payments collected for the day e.g., debit, credit card, cash and check payments, he must log all information on the daily cash report. Later, if another employee checks the report to see if all numbers match the report, she performs a basic audit of the cash report.
</div>
<div class="col">
<img src="images/sq/example.png" class="responsive">
</div>
</div>






<hr class="smSolid" ></hr>
</div>


<div class="sm" id="roai">
<h2  class="sm"> <a href="#index">Role of Academia or Industry in Cultivating the Skill</a> </h2>
<hr style="solid 5px #bbb"></hr>

<div class="row" style="width:70% ">
<b>Academia </b><br>
In terms of academic purposes, the knowldege base consists of tools which can be used for conducting audits and reviews in quality domain. But in real world, the focus is primarily on setting the right standards in terms of meeting the requirements.<br>
<b>Industry</b><br>
Where as in industry, the set of standards is maintained by the business, hence after gaining experience in reviews and audits, we can have expertise in management reviews and technical reviews<br>



</div>

<hr class="smSolid" ></hr>
</div>


<div class="sm" id="tsts">
<h2  class="sm" > <a href="#index">Tools Supporting the Skill </a></h2>
<hr style="solid 5px #bbb"></hr>
<div class="row" style="padding-top:70px">

<div class="column">
<div class="card">
<h4>Phabricator</h4>
<p>Phabricator is a complete suite of open-source software development applications which include light-weight web-based code review, planning, testing, browsing and audit score, finding bugs, etc.

Key Features:

Code review tool from Phabricator suite is termed as “Differential”. It is used in minimizing the efforts required in creating the best quality code.
Phabricator has two types of code review workflows, namely “pre-push” also termed as “review” and “post-push” termed as “audit”.
Phabricator can be integrated with Git, Subversion, and Mercurial.</p>
</div>
</div>
<div class="column">
<div class="card">
<h4>Crucible</h4>
<p>Crucible is a web-based collaborative code review application used by developers for code review, finding defects, discussing the changes and knowledge sharing, etc.

Key Features:

Crucible is a flexible application that accommodates ample range of work approaches and team sizes.
Crucible is a lightweight peer code review tool that is used in pre-commit and post-commit reviews.
Code review has become easy for SVN, Perforce, and CVS etc using Crucible.</p>
</div>
</div>
<div class="column">
<div class="card">
<h4>Veracode</h4>
<p> Veracode (now acquired by CA Technologies) is a company which delivers various solutions for automated & on-demand application security testing, automated code review, etc.

Key Features:

Veracode is used by the developers in creating secured software by scanning the binary code or byte code in place of source code.
Using Veracode one can identify the improper encrypted functionalities, malicious code and backdoors from source code.
Veracode can review a large amount of code and returns the results immediately.
To use Veracode there is no need to buy any software or hardware, you just need to pay for the analysis services you need.</p>
</div>
</div>
<div class="column">
<div class="card">
<h4>Review Board</h4>
<p>Review Board is a web-based, collaborative, free and open-source tool used for code review and document review by open-source projects and companies.

Key Features:

Using Review Board for code review one can save money and time. Time saved can be used in concentrating on creating great software.
Review Board can be integrated with ClearCase, CVS, Perforce, Plastic, etc.
In a code review by Review Board tool, the code is syntax highlighted which makes it be read faster.
Review Board supports pre-commit reviews and post-commit reviews.</p>
</div>
</div>
</div>

<hr class="smSolid" ></hr>
</div>


<div class="sm" id="ssa">
<h2  class="sm"><a href="#index"> Skill Self-Assessment</a> </h2>
<hr style="solid 5px #bbb"></hr>

<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
(6/10)
<p style="margin-top:50px">
 I have around 4 years of experience in quality assurance. But I have been  a part of a project in which I conducted reviews and audits.
Technical reviews (including inspections, walkthrough, and desk checking) examine engineering work-products.
After working with technical reviews for 3 years, I got involved in management reviews as well, to evaluate actual project results with respect to plans. 
Design track and collect metrics to monitor project quality. Achieves the expected results, meets the organisation’s requirements functions in accordance with the established operating procedures and processes
Capable of identifying non-conformities and monitoring subsequent corrective and preventive actions. A management Review also ensures that all levels of management are made aware of any changes, updates, revisions. to the day-to-day workings of the Management System itself.
<hr class="smSolid" ></hr>
</div>


<div class="sm" id="r">
<h2  class="sm"> <a href="#index">References </a></h2>
<hr style="solid 5px #bbb"></hr>
<hr class="smSolid" ></hr>
<ol>


<li>
<a href="https://www.softwaretestinghelp.com/code-review-tools/" target="_blank" style="color:blue">
https://www.softwaretestinghelp.com/code-review-tools/
</a>
</li>

<li>
<a href="https://www.guru99.com/software-quality-assurance-test-audit-review-makes-your-life-easy.html" target="_blank" style="color:blue">
https://www.guru99.com/software-quality-assurance-test-audit-review-makes-your-life-easy.html
</a>
</li>

<li>
<a href="http://www.qasigma.com/2008/12/sqa-audit.html" target="_blank" style="color:blue">
http://www.qasigma.com/2008/12/sqa-audit.html
</a>
</li>

<li>
<a href="https://na.theiia.org/services/quality/Pages/Quality-Assurance.aspx" target="_blank" style="color:blue">
https://na.theiia.org/services/quality/Pages/Quality-Assurance.aspx
</a>
</li>



</ol>

</div>

`,
    },
    {
        title: `Software Maintenance`,
        description: `<hr border-top: 3px solid #bbb;></hr><br>Lorem4 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. `,
        text: `
<hr style="solid 5px #bbb"></hr>
	<h2>Index</h2>
	<div class="boxsm" id="index">
		<ol>
			<li><a href="#nos"> Name of Skill.</a></li>
			<li><a href="#cos"> Classification of Skill.</a></li>
			<li><a href="#pfs"> Prerequisites for Skill.</a></li>
			<li><a href="#rsfea"> Related Software Engineering Area(s).</a></li>
			<li><a href="#rafs"> Rationale for Skill. </a></li>
			<li><a href="#rofs"> Roles for Skill.</a></li>
			<li><a href="#wrts"> Work Related to Skill.</a></li>
			<li><a href="#rwe"> Real-World Example/Scenario of Skill.</a></li>
			<li><a href="#roai"> Role of Academia or Industry in Cultivating the Skill.</a></li>
			<li><a href="#tsts"> Tools Supporting the Skill.</a></li>
			<li><a href="#ssa"> Skill Self-Assessment.</a></li>
			<li><a href="#r"> References.</a></li>
		</ol>	
	</div>




	<div class="sm" id="nos">
		
		<h2  class="sm"> <a href="#index"> Reengineering</a> </h2>
		<hr style="solid 5px #bbb"></hr>
		<img alt="software maintenance process models" src="images/sm/smpm.png" class="responsive" style="float:right; width:30% ">
		<p style="margin-right:40px">
		Software Reengineering is the process of updating software without affecting its functionality. This process may be done by developing additional features on the software and adding functionalities that may or may not be required but considered to make the software experience better and more efficient. As far as the definition goes, this process also entails that the software product will have improved maintainability. Thus, software reengineering is a step towards continuous improvement of software for it to be handled better by developers and clients alike. Additionally, it is a way to make existing products continue in service.
		</p>
		
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="cos">
		<h2  class="sm"> <a href="#index">Classification of Skill </a></h2>
		<hr style="solid 5px #bbb"></hr>
		
		<div class="row" style="margin-bottom:40px">
		It can be classified as a <u style="margin-left:6px"> technical skill</u>
		A technical skill is the ability to carry out a task associated with technical roles such as IT, engineering, mechanics, science or finance. Typical technical skills 
		are programming, the analysis of complex figures or the use of specific tools. The majority of technical skills require experience and sometimes extensive training to master.
		</div>

		
		<div class="row">
			<p>Maintenance as seen are of 4 types</p>			
		</div>

		<div class="row">
			<div class="col">
			<

			ul >
				<li><b>Corrective:</b></br> Maintenance performed to correct faults in hardware or software, maintenance involves testing to detect a problem and injecting a fix without disturbing the rest of the system.</li>
				<li><b>Adaptive:</b></br> Software maintenance performed to make a computer program usable in a changed environment (business rules, government policy, software platforms, hardware upgrades, etc.)</li>
				<li><b>Perfective:</b></br> Software maintenance performed to improve the performance, maintainability, or other attributes of a computer program.</li>
				<li><b>Preventive:</b></br> Maintenance performed for the purpose of preventing problems before they occur.</li>
			</ul>
			</div>
			<div class="col">
			<img alt="maintenance types" src="images/sm/mainttypes.png" class="responsive">
			<p style="margin-top:60px"> Preventative maintenance is also called software reengineering (Data restructuring, Code restructuring).</p>
			</div>

		</div>



		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="pfs">
		<h2  class="sm"> <a href="#index">Prerequisites for Skill</a> </h2>
		<hr style="solid 5px #bbb"></hr>

			<ul class="sm" style="width:50%">
				<li>General programming skills</li>
				<li>Software requirements analysis</li>
				<li>Software architecture design</li>	
				<li>Software Modelling</li>
				<li>Software debugging</li>
				<li>Documentation</li>
			</ul>  
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="rsfea">
		<h2  class="sm" ><a href="#index"> Related Software Engineering Area(s) </a> </h2>
		<hr style="solid 5px #bbb"></hr>
		<ul class="sm" style="width:70%">
			<li>Software Quality</li>
			<li>Software Testing</li>
			<li>Software Configuration Management</li>
		</ul>

		
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="rafs">
		<h2  class="sm"> <a href="#index">Rationale for Skill</a> </h2>
		<hr style="solid 5px #bbb"></hr>
		<p style="width:80%">
			 Legacy applications are at the core of many large businesses. However, they are difficult to maintain because of multiple workarounds that have been growing for years. 
			 Their support requires significant investments. For example, according to the latest estimates, the federal government spends up to 80% percent of their IT budget on 
			 maintenance of existing legacy systems. What’s more, legacy applications can be a real impediment to the digital transformation of a company due to their inflexibility 
			 and inability to get new features or harness emerging technologies.
		</p>
		<p style="width:80%">
			Software reengineering is one of the viable ways to mitigate issues with legacy applications. In this article, we highlight its area of use, explore activities it 
			comprises, and look at why and when you may need each of these activities. On top of that, we reveal possible risks of reengineering and advise on how to organize a 
			working reengineering process.
		</p>

		<h5 style="margin-top:60px; margin-bottom:30px">When you may need it ?</h5>
		<ul style="width:70%">
			<li>To identify if further changes are feasible or if the system has to be substituted.</li>
			<li>To allow for smoother and faster substitution of the original system with a new one, in case the revival of a legacy application turns out to be too complicated or even impossible.</li>
			<li>To help to predict the effect of future enhancements and changes in software.</li>
			<li>To shorten the learning curve for a new support provider.</li>
			<li>To identify potentially re-usable components for future integrations.</li>
		</ul>
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="rofs">
		<h2  class="sm"> <a href="#index">Roles for Skill </a></h2>
		<hr style="solid 5px #bbb"></hr>
		
		<ul class="sm" style="width:70%">
			<li>Software developer</li>
			<li>Software architect</li>
			<li>Software tester</li>
		</ul>

		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="wrts">
		<h2  class="sm"> <a href="#index">Work Related to Skill </a></h2>
		<hr style="solid 5px #bbb"></hr>
		<ul class="sm" style="width:70%">
			<li>Reverse engineering</li>
			<li>Code restructuring</li>
			<li>Forward engineering</li>
			<li>Software testing</li>
			<li>Redocumentation</li>
		</ul> 
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="rwe">
		<h2  class="sm"><a href="#index">Real-World Example</a></h2> 
			<hr style="solid 5px #bbb"></hr>
		
		<div class="row" style="margin-top:30px">
			<div class="col"></div>
			<div class="col"></div>
		</div>

		<h5>1. Enterprise Knowledge Management System </h5>
		<div class="row" style="margin-top:30px">
			<div class="col" >
			The Enterprise Knowledge Management System was not considered for reengineering, however, when starting work on this project, the INSART team analyzed the code 
			and system architecture and discovered that it would require reengineering. This idea was then suggested to the customer who understood the importance of this 
			process after thorough justification of the necessary changes and the advent of opening new prospects.
			</div>
			<div class="col">
				<img alt="Enterprise Knowledge Management System" src="images/sm/ekms.png" class="responsive">
			</div>
		</div>

		<div class="row" style="margin-top:10px; margin-left:10px ">
		The reengineering of this system included two stages: upgrading the programming language version (from Java 5 to Java 7) and gradually updating each component. 
		This approach allowed us to save the operability of the system, improving its performance on the first stage and making more profound changes later on. 
		The following technologies were used: Spring Framework, Ehcache, DHTMLX, JQuery, Maven, etc.
		</div>
		<div class="row" style="margin-top:10px ; margin-left:10px" >
		The Enterprise Knowledge Management System is still under development, however even now its performance and scalability have been improved greatly and its support 
		and ability for further updates became much easier. Apart from that, the system is on production, therefore its architecture cannot be changed significantly, since 
		such changes can influence business rules.
		</div>

		<h5 style="margin-top:60px">2. Online Marketing Platform</h5>
		<div class="row" style="margin-top:30px">
			The Online Marketing Platform has a 10+ year history. Bad scalability and an overly complicated updating process for new requirements caused the need for full 
			engineering. INSART took charge by implementing modern technologies like Java 8, PostgreSQL 9, Spring Framework, AngularJS, etc., and created a new system architecture. 
			This allowed us to improve system performance, avoid multiple software faults found in the legacy system and add new functionality. As a result, the system became 
			scalable and easy to update.
		</div>

		<div class="row" style="margin-top:30px">
			<div class="col" style="text-align: center">
				<h5>Legacy architecture</h5>
				<img alt="Legacy architecture" src="images/sm/legacy.jpg" style="width:500px;" class="responsive">
			</div>
			<div class="col" style="text-align: center">
				<h5>New architecture</h5>
				<img alt="New architecture" src="images/sm/new.jpg" style="width:500px;" class="responsive">
			</div>
			<div class="row" style="margin-top:30px">
	
				Reengineering has been ongoing for two years and the revamped Online Marketing Platform is still being developed and improved. 
				Nevertheless, it has already met almost all requirements for functionality, performance, scalability and reliability.
			</div>
		</div>

		<h5 style="margin-top:60px">3. The Remote Device Management Project</h5>
		<div class="row" style="margin-top:30px">
			
			<p>
			Having worked with the Remote Device Management project for several years, the INSART team suggested a strategy of reengineering the system to the customer which 
			would solve the performance and scalability problems caused by monolithic core architecture and using inconvenient database structure. The customer agreed with the 
			presented arguments and as a result, the INSART team supports operability of the current system version and is simultaneously developing a new system.
			</p>

			<p>
			Using new technologies (Spring Framework 4, MongoDB, AngularJS and Bootstrap) and creating new system architecture not only increased the performance of the system, but also reduced the terms of development. Additionally, using the modified data structure allows to significantly simplify data processing and to prevent damaging data as a result of inconsistencies in user actions (this problem occurred in the legacy system).
			</p>
		</div>
		


		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="roai">
		<h2  class="sm"> <a href="#index">Role of Academia or Industry in Cultivating the Skill</a> </h2>
		<hr style="solid 5px #bbb"></hr>
		
		<div class="row" style="width:70%	">
			Software engineering curricula emphasize developing new software systems. Little attention is given to how to change and modernize existing systems, i.e., 
			the theory and practice of software maintenance and reengineering. The paper presents the author’s experience in teaching software reengineering, 
			findings/conclusions are as follows:<a href="#r4" style="color:blue">[4]</a>
			<ol style="margin-top:30px; margin-bottom:30px;">
				<li>  There is a big shortage of educational materials for teaching software reengineering.</li>
				<li>  Selecting the suitable materials (that balance theory and practice) and the right tool(s) for the level of students and depth of coverage required is a difficult task</li>
				<li>  Teaching reengineering using toy exercises and assignments does not convey the practical aspects of the subject</li>
			</ol> 
			
			<p> While, teaching with real, even small size, exercises and assignments, is almost infeasible. Getting the balance right requires careful consideration and 
			experimentation. Students understand and appreciate this topic much more if they have previous industrial experience and when they are presented with 
			real industrial case studies.
			</p> 
		</div>
		
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="tsts">
		<h2  class="sm" > <a href="#index">Tools Supporting the Skill </a></h2>
		<hr style="solid 5px #bbb"></hr>
		<h4  style="margin-top:30px">DMS® Software Reengineering Toolkit™</h4>	
		<div class="row" style="margin-top:50px">
			<p style="width:30%;"">
				It is a sophisticated set of infrastructure and highly customizable tools for automating:<br> 
					<br>1. Source program analysis 
					<br>2. Modification of source code 
					<br>3. Generation of software
			</p>
			<a href="http://www.semanticdesigns.com/Products/DMS/DMSToolkit.html" target="_blank">
				<img alt="DMS" style="float:right;" src="images/sm/DMS.png" class="responsive">
			</a>
			
		</div>
		
		<div class="row" style="padding-top:50px">
			<a href="https://www.hex-rays.com/products/ida/"  target="_blank" style = "width:45%;  display:flex;">
				<div class="card">
					<h5>Disassemblers</h4>
					<p>A disassembler is a program that translates an executable file to assembly language. The most popular one is IDA Pro</p>
					<img alt="hexray" src="images/sm/hexray.png" style="height:50%; width:100%" class="responsive">
				</div>
			</a>

			
			<div class="card" style = "width:45%; height:100%; display:flex; align-content: center;">
				<h5>Debuggers</h5>
				
				<p>A debugger is invaluable for any developer to see what a program is doing right now. You get the same benefit from debugging when 
				reversing applications as you get from debugging live applications.
				The most popular debuggers are 
				</p>

				<div class="row" style="align-content: center; display:flex"; margin-top:30px;>
					

					<div class="column" style="width:33%">
						<a href="http://www.ollydbg.de/" target="_blank">
							<img alt="ollydbg" src="images/sm/ollydbg.gif" class="responsive">
							<p>OllyDbg</p>
						</a>
					</div>

					
					<div class="column" style="width:33%">
						<a href="http://www.windbg.org/" target="_blank">
							<img alt="windbg" src="images/sm/windbg.png"  style="height:55px; width:55px" class="responsive">
							<p>WinDbg</p>
						</a>
					</div>					
					
					<div class="column" style;"width:33%">
						<a href="https://www.microsoft.com/uk-ua/p/windbg-preview/9pgjgd53tn86?activetab=pivot:overviewtab" target="_blank">
							<img alt="windbg_prv" src="images/sm/windbgp.png" style="height:55px; width:55px" class="responsive">
							<p>Windbg Preview.</p>	
						</a>
					</div>
				</div>
			</div>


		</div>

		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="ssa">
		<h2  class="sm"><a href="#index"> Skill Self-Assessment</a> </h2>
		<hr style="solid 5px #bbb"></hr>

		<span class="fa fa-star checked"></span>
		<span class="fa fa-star checked"></span>
		<span class="fa fa-star checked"></span>
		<span class="fa fa-star checked"></span>
		<span class="fa fa-star"></span>
		(5/10)
		<p style="margin-top:50px">
		Software Reengineering is a skill that requires expertise in varied spectrum of maintenance and software development. At my current level as mentioned previously in 
		role of academia secion, I myslef as a student am more adept to classifying myself as developer which plays a major role in 3rd stage of forward engineering phase, 
		restructuring requires an in depth knowledge of data structures to be able to optimise the current structure of the code, and i would classify myself as a 
		beginner at this stage. Also, i would rate myself as an intermediate in the first stage of reengineering where slicing skills are necessary.    
		</p>
		<p>
		Considering an average of all of my skills currently falling in category of intermediate, i would rate myself 5/10.
		</p>
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="r">
				<h2  class="sm"> <a href="#index">References </a></h2>
				<hr style="solid 5px #bbb"></hr>
				<hr class="smSolid" ></hr>
		<ol>

			<li>
				<a href="http://www.sdibo.com/maintenance" target="_blank" style="color:blue">
				 http://www.sdibo.com/maintenance
				</a>
			</li>

			<li>
				<a href="https://www.scnsoft.com/blog/legacy-software-reengineering-guide" target="_blank" style="color:blue"> 
				 https://www.scnsoft.com/blog/legacy-software-reengineering-guide
				</a>
			</li>
			
			<li>
				<a href="https://www.linkedin.com/pulse/software-reengineering-successful-implementation-vasiliy-soloshchuk-1/" target="_blank" style="color:blue">
				 https://www.linkedin.com/pulse/software-reengineering-successful-implementation-vasiliy-soloshchuk-1/
				</a>
			</li>
			
			<li>
				<a href="https://sci-hub.tw/10.1145/1134285.1134395" target="_blank" style="color:blue" id="r4">
				 https://sci-hub.tw/10.1145/1134285.1134395
				</a>
			</li>

			<li>
				<a href="http://www.semdesigns.com/Products/DMS/DMSToolkit.html" target="_blank" style="color:blue">
				 http://www.semdesigns.com/Products/DMS/DMSToolkit.html 
				</a>
			</li>
			
			<li>	
				<a href="https://www.indeed.com/q-Software-Reengineering-jobs.html?vjk=eb6e6645a6c23836" target="_blank" style="color:blue">
				 https://www.indeed.com/q-Software-Reengineering-jobs.html?vjk=eb6e6645a6c23836" 
				</a>
			</li>

			<li>
				<a href=https://hiring.monster.com/employer-resources/job-description-templates/software-engineer-job-description-sample/" target="_blank" style="color:blue">
				 https://hiring.monster.com/employer-resources/job-description-templates/software-engineer-job-description-sample/
				</a>
			</li>
		</ol>

	</div>	
`
    },
    {
        title: `Software Process Measurement`,
        description: `<hr border-top: 3px solid #bbb;></hr>
		<br>The evaluation of software processes is nowadays a
		very important issue due to the growing 
		interest of software companies in the improvement of the productivity and quality of delivered products. 
		Software measurement plays a fundamental role here. Given the great diversity of entities which are candidates 
		for measurement in the software process improvement context`,
        text: `
		<hr style="solid 5px #bbb"></hr>
	<h2>Index</h2>
	<div class="boxsm" id="index">
		<ol>
			<li><a href="#nos">Name of Skill.</a></li>
			<li><a href="#cos">Classification of Skill.</a></li>
			<li><a href="#pfs">Prerequisites for Skill.</a></li>
			<li><a href="#rsfea">Related Software Engineering Area(s).</a></li>
			<li><a href="#rafs">Rationale for Skill. </a></li>
			<li><a href="#rofs">Roles for Skill.</a></li>
			<li><a href="#wrts">Work Related to Skill.</a></li>
			<li><a href="#rwe">Real-World Example/Scenario of Skill.</a></li>
			<li><a href="#roai">Role of Academia or Industry in Cultivating the Skill.</a></li>
			<li><a href="#tsts">Tools Supporting the Skill.</a></li>
			<li><a href="#ssa">Skill Self-Assessment.</a></li>
			<li><a href="#r">References.</a></li>
		</ol>	
	</div>
	<div id="navbar_pa">
  	<a href="index.html">Home</a>
  	<a href="#table_pa_container">Table Of Contents</a>
	</div>
	<div class="sm" id="nos">
		
		<h2  class="sm"> <a href="#index">Software Process Measurement</a> </h2>
		<hr style="solid 5px #bbb"></hr>
		<img src="images/measure/measurementprocess.png" style="float:right; width:30% ">
		<p style="margin-right:40px">
		The measurement of software processes is nowadays a very important issue due to the growing 
		interest of software companies in the improvement of the productivity and quality of delivered products. 
		Software measurement plays a fundamental role in software industry. Given the great diversity of entities
		which are candidates for measurement in the software process improvement context 
		(process models, projects, resources, products) this measurement must be performed in a consistent 
		and integrated way. This will facilitate the making of decisions in process improvement.

		</p>
		
		<div class="sm" id="cos">
		<h2  class="sm"> <a href="#index">Classification of Skill </a></h2>
		<hr style="solid 5px #bbb"></hr>
		
		<div class="row" style="margin-bottom:40px">
		Software Process Measurement considered as technical skill used to measure many characteristics 
		of software and software projects such as size, complexity, reliability, quality, adherence to process, and profitability.<br>
		The Goal Question Metric (GQM) approach is a valuable, structured, and widely accepted method for answering the question of 
		what to measure and drives the definition of a metrics program from the top down:<br>
A software metric is a measure of software characteristics which are measurable or countable. Software metrics are valuable for many reasons, including measuring software performance, planning work items, measuring productivity,
 and many other uses and used to measure the efficiency and effectiveness of various processes<br>
Within the software development process, many metrics are that are all connected.
 Software metrics are like the four functions of management: Planning, Organization, Control, or Improvement.<br>
Software metrics can be classified into two types as follows:<br>
<h4>1. Product Metrics:</h4> <br>
<p>These are the measures of various characteristics of the software product. The two important software characteristics are:<br>
  1.	Size and complexity of software.<br>
  2.	Quality and reliability of software.<br>
These metrics can be computed for different stages of SDLC.</p><br>
 <h4> 2. Process Metrics:</h4> <br>
  <p>These are the measures of various characteristics of the software development process.
  For example, the efficiency of fault detection. They are used to measure the characteristics of methods
  , techniques, and tools that are used for developing software.</p>
<img src="images/measure/classificationofmetrics.png" >
		</div>

		
		
		</div>



		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="pfs">
		<h2  class="sm"> <a href="#index">Prerequisites for Skill</a> </h2>
		<hr style="solid 5px #bbb"></hr>

			To measure a software process, one should know about effort and cost required for the project and in terms of product lines of code produced, execution speed, and other defects should be known.
software engineers need to be skilled in estimation and measurement,
which means:
<ul class="sm" style="width:70%">
<li>Understanding the activities and risks involved in software development</li>
<li>Predicting and controlling the activities</li>
<li>Managing the risks</li>
<li>Delivering reliably</li>
<li>Managing proactively to avoid crises</li>
</ul>

		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="rsfea">
		<h2  class="sm" ><a href="#index"> Related Software Engineering Area(s) </a> </h2>
		<hr style="solid 5px #bbb"></hr>
		<ul class="sm" style="width:70%">
			<li>Software Engineering Process</li>
			
		</ul>

		
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="rafs">
		<h2  class="sm"> <a href="#index">Rationale for Skill</a> </h2>
		<hr style="solid 5px #bbb"></hr>
		<p>
			When we look at the track record for the software industry, 
			although it has improved over the last ten years, a disappointing picture still emerges.
			<ul class="sm" style="width:70%">
<li>A full 23% of all software projects are canceled before completion</li>
<li>Of those projects completed, only 28% were delivered on time, within budget,
and with all originally specified features
</li>
<li>The average software project overran the budget by 45%.</li>
</ul>
		</p>
		<p>
			So, the very nature of software engineering makes measurement a necessity, because more rigorous 
			methods for production, planning, monitoring, and control are needed, otherwise the amount of risk 
			of software projects may become excessive, and software production may easily get out of industrial control. 
			This would produce obvious damages to both software producers (e.g., higher costs, schedule slippage) and users 
			(e.g., poor quality products, late product delivery, high prices). To be effective and make good use of the 
			resources devoted to it, software measurement should address important development issues, i.e., it should be 
			carried out within a precise goal of industrial interest.In this context, software measurement may serve several purposes, depending on the level of knowledge about a process of product
		</p>

		
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="rofs">
		<h2  class="sm"> <a href="#index">Roles for Skill </a></h2>
		<hr style="solid 5px #bbb"></hr>
		
		<ul class="sm" style="width:70%">
			<li>Software Engineer</li>
			<li>Software architect</li>
			<li>Manager</li>
		</ul>

		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="wrts">
		<h2  class="sm"> <a href="#index">Work Related to Skill </a></h2>
		<hr style="solid 5px #bbb"></hr>
		<p>
			This measurement process becomes a process asset to be made
available for use by the projects in developing, maintaining, and implementing the
organization's standard software process. Some examples of process assets
related to measurement include:
			<ul class="sm" style="width:70%">
<li>The organization's standard software measurement process element (described
below).
</li>
<li>Organizational databases and associated user documentation.
</li>
<li>cost models and associated user documentation.</li>
<li>Tools and methods for defining measures.</li>
<li>Guidelines and criteria for tailoring the software measurement process element.</li>
</ul>
		</p>
		<div class="col" style="text-align: center">
				<h5>Figure describes the measurement process model:</h5>
				<img src="images/measure/measurementprocessmodel.png" style="width:500px;">
			</div>
			<p>
			It is fundamental that all measurement activities be carried out in the context of a 
			well-defined measurement goal. In turn, the measurement goal should be clearly connected with an industrial goal, 
			so the measurement program responds to a software organization's needs.<br>
			The Goal/Question/Metric (GQM) provides a framework for deriving measures from measurement goals.<br>
			<ol class="sm" style="width:70%">
<li>Identify the Goal for the product/process/resource. This is the goal that your
metrics “customer” is trying to achieve.</li>
<li>Determine the Question(s) that will characterize the way achievement of the
goal is going to be assessed
.
</li>
<li>Define the Metric(s) that will provide a quantitative answer to each question.
Metrics can be objective (based solely on the object being measured) or subjective
.</li>
<li>Tools and methods for defining measures.</li>
<li>Guidelines and criteria for tailoring the software measurement process element.</li>
</ol>
			</p>
			<p>
			The idea is to define a measurement goal, with five dimensions, as follows: <br>
			<ul class="sm" style="width:70%">
<li><h5>Object of Study:</h5> the entity or set of entities that should be studied, e.g., a software specification, 
or a testing process.<li> 
<li><h5>Purpose:</h5> the reason/the type of result that should be obtained:
 e.g., one may want to carry out/obtain a characterization, evaluation, prediction, or improvement. <li>
<li><h5>Quality Focus:</h5> the attribute or set of attributes that should be studied, e.g., size
 (for the software specification, or effectiveness (for the testing process); <li>
<li><h5>Point of View:</h5> the person or organization for whose benefit measurement is 
carried out, e.g., the designers (for the software specification), or the testers (for the testing process) .<li>
<li><h5>Environment:</h5> the context (e.g., the specific project or environment) in which measurement is carried out.<li>
</ul>

			</p>
		
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="rwe">
		<h2  class="sm"><a href="#index">Real-World Example</a></h2> 
			<p>In E-Government and E-Commerce systems measurements have been conducted throughout the 
			software development life cycle, their scope varies depending on the development phase. 
			Different measurement goals are defined at different development phases, thus resulting 
			into different kinds of metrics. In the early phases of E-Government and 
			E-Commerce software development, metrics are used mainly for estimation purposes.
			It is useful to collect metrics relating to different 
			projects as these can serve as historical data for future projects, aiding in better results
			</p>
		<p>
		In the intermediate phases of the E-Government and E-Commerce development process, 
		metrics are used for project monitoring purposes while, in the meantime, 
		code metrics are used to prevent errors. Furthermore, 
		defect reports during testing are used for evaluating 
		product quality and calibrating the measurement methods 
		of the early phases. This purpose is also served by collecting external 
		measurement data following project delivery, namely during the beta testing or maintenance
		phases of an E-Government or E-Commerce project. 
		So, the time to measure is determined by the requirements and the aims of the 
		measurement program and can vary from a project to another.
			</p>
			<p>
			Although many measurement tools are available, using number of metrics, 
			there are not many tools available yet combining past projects’
			measurement data with current project data to aid in decision making. 
			Combining metrics with decision support techniques, or methods for resolving uncertainty 
			will lead to the development of valuable tools, 
			which can aid towards higher-quality software for E-Government and ECommerce systems.
			</p>


		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="roai">
		<h2  class="sm"> <a href="#index">Role of Academia or Industry in Cultivating the Skill</a> </h2>
		<hr style="solid 5px #bbb"></hr>
		
		
			 
			
			<p>      Software processes require knowledge and tools for measuring all working activities involved. 
			Despite the benefits that could be gained from models for certifying software processes, cost and complexity 
			are factors that must be considered by software developing companies willing to adopt them.</p>
<p>Knowledge and techniques for measuring software processes have been evolving in the software engineering domain. 
To manage a software, company requires continuously improving staff and conditions that leverage working processes performance. 
It is not seldom to find software developing companies considering process measurements as an additional and difficult activity.
 However, PMS have been adopted as a proactive approach by software developing companies willing to improve software quality from 
 a viewpoint of development processes.</p> 
 <p>The measurement process present in maturity models for software processes can function as the
 foundation for structuring a PMS with metrics for supporting business decisions at software developing companies. 
 The continuous analysis of measurements acquired from different software projects and processes can provide information to 
 support business decisions, corrective actions for projects and for promoting competitive advantage. Considering this whole
 scenario for software process management, software development measuring processes develops relationships between strategic
 business objectives and metrics from software development processes.</p>

			
			
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="tsts">
		<h2  class="sm" > <a href="#index">Tools Supporting the Skill </a></h2>
		<hr style="solid 5px #bbb"></hr>
			
		
		
		<div class="row" style="padding-top:50px">
			

			
			<div class="card" style = "width:45%; height:100%; display:flex; align-content: center;">
				<h5>SonarQube</h5>
				
				<p>SonarQube is an open-source platform developed by SonarSource for continuous inspection 
				of code quality to perform automatic reviews with static analysis of code to detect bugs,
				code smells, and security vulnerabilities on 20+ programming languages. SonarQube offers 
				reports on duplicated code, coding standards, unit tests, code coverage,
				code complexity, comments, bugs, and security vulnerabilities 
				</p>
			</div>
            <div class="card" style = "width:45%; height:100%; display:flex; align-content: center;">
				<h5>Visual Studio</h5>
				
				<p>Developers can use Visual Studio to generate code metrics data that measure the 
				complexity and maintainability of their managed code. 
				Code metrics data can be generated for an entire solution or a single project.
				</p>
			</div>
			<div class="card" style = "width:45%; height:100%; display:flex; align-content: center;">
				<h5>CCMETRICS</h5>
				
				<p>Cyclomatic complexity is a software metric used to indicate the complexity of a program
				</p>
			</div>

		</div>

		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="ssa">
		<h2  class="sm"><a href="#index"> Skill Self-Assessment</a> </h2>
		<hr style="solid 5px #bbb"></hr>

		<span class="fa fa-star checked"></span>
		<span class="fa fa-star checked"></span>
		<span class="fa fa-star checked"></span>
		<span class="fa fa-star checked"></span>
		<span class="fa fa-star checked"></span>
		<span class="fa fa-star"></span>
		(6/10)
		<p style="margin-top:50px">
		Software Measurement is a skill which requires professional experience in the software development and software planning. 
		As a graduate student myself developed few applications in academic time and measured complexity of one application 
		which is at small level so, 
		I would rate myself 6/10 at an intermediate level for this skill as it required more experience in different projects.    
		</p>
		
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="r">
				<h2  class="sm"> <a href="#index">References </a></h2>
				<hr style="solid 5px #bbb"></hr>
				<hr class="smSolid" ></hr>
		<ul>

			<li>
				<a href="https://www.scielo.br/scielo.php?script=sci_arttext&pid=S1807-17752013000200357" target="_blank" style="color:blue">
				 https://www.scielo.br/scielo.php?script=sci_arttext&pid=S1807-17752013000200357
				</a>
			</li>

			<li>
				<a href="https://www.javatpoint.com/software-engineering-software-metrics" target="_blank" style="color:blue"> 
				 https://www.javatpoint.com/software-engineering-software-metrics
				</a>
			</li>
			
			<li>
				<a href="http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.97.9040&rep=rep1&type=pdf" target="_blank" style="color:blue">
				 http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.97.9040&rep=rep1&type=pdf
				</a>
			</li>
			
			<li>
				<a href="https://www.tutorialspoint.com/software_quality_management/software_quality_management_basics_of_measurement.htm" target="_blank" style="color:blue" id="r4">
				 https://www.tutorialspoint.com/software_quality_management/software_quality_management_basics_of_measurement.htm
				</a>
			</li>

			<li>
				<a href="https://ecomputernotes.com/software-engineering/software-measurement" target="_blank" style="color:blue">
				 https://ecomputernotes.com/software-engineering/software-measurement
				</a>
			</li>
		</ul>

	</div>	
`
    },
    {
        title: `Software Requirements`,
        description: `Lorem5 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. `,
        text: `<p>Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. Maecenas sit amet nisl arcu. Aenean sagittis tempor felis, at facilisis nulla mattis vel. Duis sed magna cursus, pharetra enim a, vehicula sem. Phasellus velit ex, porttitor quis tempor in, congue sed felis. Aliquam accumsan tellus ac lectus porta dictum. Duis imperdiet, purus id ultricies ullamcorper, quam nibh dictum felis, sit amet volutpat enim arcu et lacus. In eget massa feugiat metus laoreet varius. Praesent finibus eget nunc ut finibus. Praesent vitae tincidunt orci. Pellentesque vulputate nisl sed nunc tempor blandit.</p><p><a href="./index.html">Return Home</a></p>`,
    },
    {
        title: `Software Engineering Management`,
        description: `Lorem5 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. `,
        text: `
		<hr style="solid 5px #bbb"></hr>
		<div class="sm">
			<h2  class="sm"> Scheduling </h2>
			<p>Very close to project planning, scheduling is fundamental to any project, certainly no different for software projects, many see scheduling solely as a matter of estimation, where lies the first mistake for beginners.</p>
			<p>Making a schedule is not difference than giving times, time to begin and a time to end, making good or even great schedule though involve mastering skills to deal with things under and with things beyond one’s control.</p>
			<p>One of the definitions of Scheduling quoted by the website Cleverism is:</p>
			<p>“The ability to overcome such complex and frustrating situations by planning your activities such that you are able to complete all your projects and goals according to your priorities as well as within the available time limit”</p>
			<p>Greatness lives in simplicity, so let’s call scheduling as the ability to get things done in time, in budget and in specifications…. easy? Not at all!</p>

			
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> Classification of Skill </h2>
			<p>How to classify a skill that is so simple to execute but so hard to master, in fact its easy to the point where anyone can do it while hard enough to be impossible to reach perfection, the reason for that is quite simple, scheduling requires to deal with time, people, resources and with the future which is unpredictable at least at its entirety.</p>
			<p>Though dealing with the unknown is not new for human beings at this point and being prepared and experienced in dealing with it can prevent those busy days at work where we have been frequently disturbed by calls for urgent meetings, or been assigned with last-minute tasks where yet we return home without accomplishing anything significant.</p>
			<p>With it we can certainly conclude that scheduling is very hard to distinguish among soft and hard skill while it certainly demands a lot from interpersonal and technical capacity.</p>

			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> Prerequisites for Skill </h2>
			<p>What is needed to play soccer? A field and a ball, but what is needed to be a great player?</p>
			<p>In summary all that is required to scheduling is a project, from that so dreamed vacation project up to the construction of a nuclear powerplant both require the same skill but the difficulty and expectation “may” differ.</p>
			<p>Now what differs a professional in scheduling who deals with the construction of a huge nuclear powerplant from normal people making their next vacation schedule?</p>
			<h4>Experience</h4>
			<p>I am quite sure you have learned from that mistake of renting that hotel room with no air conditioning in a tropical place, do not do that. Seriously!</p>
			<h4>Anticipation and Critical Thinking</h4>
			<p>If you are touring around, please check the meteorology before deciding between the umbrella and the sunscreen, it can be the difference between a pleasant time and a not so much.</p>
			<h4>Risk Management</h4>
			<p>Did you ever lose that leg flight? It is better to be ready to bleed, being aware of your options before hand can save you from the worst-case scenario and things can scale quickly in these scenarios and trust me there is no fun involved.</p>
			<h4>Delegating</h4>
			<p>Well, consider everything involved in a vacation trip, car rental, hotel rental, air tickets, itinerary, logistics, etc… splitting the work is the key to getting things done in time, just be sure of not leaving the credit card with your wife, you know, common sense.</p>
			<h4>Measurement</h4>
			<p>If you go for vacations its better to know for how long you will stay at places, after all several decisions depends on it, how many days at the hotel, date of air tickets, etc... the whole logistic of the schedule depends heavily on starting and end date of the activities.</p>
			<div class="box">“Measurement is the first step that leads to control and eventually to improvement. If you can’t measure something, you can’t understand it. If you can’t understand it, you can’t control it. If you can’t control it, you can’t improve it.” — H. James Harrington</div>
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> Related Software Engineering Area(s)  </h2>
			<p>Software Project Management</p>
			<p>Risk management.</p>
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> Rationale for Skill </h2>
			Time is a major concern in projects and in software projects its no different, being able to manage it through precise schedule can play an important role in project management giving the information needed to  provide solutions from risk management to providing all needs of the project across its life span.
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm"><h2  class="sm"> Roles for Skill </h2>
			<p>Project Manager</p>
			<p>Risk Manager</p>
			<p>Scrum Master/Member</p>
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> Work Related to Skill </h2>
			<h4>Work Breakdown Structure(WBS)</h4>
			<p>This is the concept of breaking activities into sub activities in order to allow control in a project management, its hard to keep control of an activity that takes months, easier though to have follow up and consequently taking the according measure for tasks that have the length of days or hours.</p>
			<p>According to PMI WBS is a “deliverable oriented hierarchical decomposition of the work to be executed by the project team.”</p>
			<p>There are two types of WBS approaches as follows bellow:</p>
			<h5>Deliverable-Based</h5>
			<p>As the name suggests, the focus here is on the deliverables, so each deliverable will be the root of the decomposition structure, its very close to what we know as a top-down approach in software engineering, and the most common approach.</p>
			<img class="real" src="images/DeliverableBased.jpg" >
			<h5>Phase-Based</h5>
			<p>This approach sees things based on project phases, from conception into implementation until the ending activities of the project, this approach usually encapsulated more than just technical activities and involves control activities such as closing.</p>
			<img class="real" src="images/PhaseBased.jpg">
			<h4>Critical Path Method</h4>
			<p>Critical path method, is about to distinguish the path of higher length on your schedule, after defining dependencies and building an activities schedule, you sum the estimation of each activity in the existing paths and highlight the one that would take longer, this will determine the minimum amount of time necessary to conclude the project, once parallelisation wont matter due to the dependencies. This method is very important to understand which is the most critical activities in a project once they are the ones that will be leading the project downstream.</p>
			<img class="real" src="images/CriticalPath.png">
			<h4>Preliminary Schedules Refinement</h4>
			<h4>Realistic Scheduling, Applying Risk Management(Prevention/Contingency) to Schedules</h4>
			<h4>Earned Value Management(EVM)</h4>
		</div>
		<div class="sm">
			<h2  class="sm"> Real-World Example </h2>
			<div class="row" style="padding-top:70px">
				
				<div class="column">
					<div class="card">
						<h4>Estimator/Project Coordinator</h4>
						<p>Responsible for coordinating the construction projects from start to finish.</p>
					</div>
				</div>
				<div class="column">
					<div class="card">
						<h4>Senior Director, Project Management Office</h4>
						<p>Responsible for driving the overall strategy for the Project Management Office and providing industry standard project controls to effectively deliver large-scale capital projects and integrated programs within the Nuclear Power industry.</p>
					</div>
				</div>
				<div class="column">
					<div class="card">
						<h4>Risk Assessment Officer</h4>
						<p>Provides planned, systematic project risk management support and oversight to ensure that projects’ risks are managed to support capital construction projects being delivered in a timely, safe, cost effective manner, with the required level of quality.</p>
					</div>
				</div>
			</div>
		</div>
		<div class="sm">
			<h2  class="sm"> Role of Academia or Industry in Cultivating the Skill </h2>
			<p>Hard to find an explicit approach, what drives the development of the skill is that this is the very essence of a project, three of the most fundamental pilar are time, budget and quality which is exactly what schedulling is about, how to make the budget and the quality into the time available or any similar fiting among these 3.</p>
			<p>Many ways of cultivating it have been raised, but I bring the attention to the agile methodology, which is a new way of scheduling which gives more freedom to handle the unknown which is very unstable.</p>
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm" > Tools Supporting the Skill </h2>
			<div class="row" style="padding-top:70px">
				
				<div class="column">
					<div class="card">
						<h4>Microsoft Project</h4>
						<p>Description</p>
					</div>
				</div>
				<div class="column">
					<div class="card">
						<h4>Monday.com</h4>
						<p>Description</p>
					</div>
				</div>
			</div>
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> Skill Self-Assessment </h2>
			4
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> References </h2>
			<p><a href="https://ca.indeed.com/?r=us">Indeed</a>[1]</p>
			<p><a href="https://www.pmi.org/learning/library/scheduling-professional-career-option-certified-6600">Project Management Institute</a>[2]</p>
			<p><a href="https://www.cleverism.com/skills-and-tools/scheduling/">Cleverism</a>[3]</p>
			<p><a href="https://www.mindtools.com/pages/article/newHTE_07.htm">MindTools</a>[4]</p>
			<hr class="smSolid" ></hr>
		</div>		
		`,
    },

    {
        title: `Computing Foundations`,
        description: `Problem Analysis: This skill is useful for breaking-down a given identified problem into sub-problem and 
					creating multiple cause-effect path to get the actual cause for the problem.`,
        text: `
	
		<hr style="solid 5px #bbb"></hr>
	<div id="table_pa_container">
	<p class="table_pa_title" style="color: #005a9c;">On this Page:</p>
		<ul>
			<li><a id="table_pa_container" href="#name_pa">Name of Skill</a></li>
			<li><a id="table_pa_container" href="#class_pa">Classification of Skill</a></li>
			<li><a id="table_pa_container" href="#pre_pa">Prerequisites for Skill</a></li>
			<li><a id="table_pa_container" href="#areas_pa">Related Software Engineering Area(s)</a></li>
			<li><a id="table_pa_container" href="#rationale_pa">Rationale for Skill </a></li>
			<li><a id="table_pa_container" href="#roles_pa">Roles for Skill</a></li>
			<li><a id="table_pa_container" href="#work_pa">Work Related to Skill</a></li>
			<li><a id="table_pa_container" href="#example_pa">Real-World Example/Scenario of Skill</a></li>
			<li><a id="table_pa_container" href="#academia_pa">Role of Academia or Industry in Cultivating the Skill</a></li>
			<li><a id="table_pa_container" href="#tools_pa">Tools Supporting the Skill</a></li>
			<li><a id="table_pa_container" href="#assessment_pa">Skill Self-Assessment</a></li>
			<li><a id="table_pa_container" href="#ref_pa">References.</a></li>
		</ul>	
	</div>
	<div id="navbar_pa">
  	<a href="index.html">Home</a>
  	<a href="#table_pa_container">Table Of Contents</a>
	</div>
	<hr style="solid 5px #bbb"></hr>
	
	<div class="sm" id="name_pa">
		
		<h2  class="ps" > Name of Skill </h2><br>
		<strong>Problem Analysis</strong><br>
		<figure>
		<img class="img-fluid" src="images/pa/root.jpg" style="float:right; width:400px; height:auto;" alt="Root Cause Analysis diagram for searching one root cause"></img>
		</figure>
		
		
		
		<p id="pa"> It is often termed as <b>Root Cause Analysis</b> and is a method of Problem-Solving. It is used for identifying the root causes of
		faults or problems [1].</p>
		
		<hr class="smSolid" ></hr>
	</div>
	


	<div class="sm" id="class_pa">
		<h2  class="ps" > Classification of Skill </h2>
		It can be classified as <b>Hard Technical Skill</b>.<br>
		<p id="pa"> Hard skills are technical knowledge or training that you have gained through any life experience, 
		including in your career or education [2]. </p>
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="pre_pa">
		<h2  class="sm"> Prerequisites for Skill </h2>
		<ul style="list-style-type:square;">
		<li>Identified problem Statement</li>
		<li>Problem Domain Knowledge</li>
		<li>Convergent Thinking</li>
		<li>Divergent Thinking</li>
		<li>Algorithms</li>
		<li>Decision-Making</li>
		<li>Data-Structures</li>
		<li>Knowledge of the Problem Domain</li>
		</ul>
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="areas_pa">
		<h2  class="sm"> Related Software Engineering Area(s)  </h2>
		<ul style="list-style-type:square;">
		<li>Software Design</li>
		<li>Software Construction</li>
		<li>Software Maintenance</li>
		<li>Software Requirements</li>
		</ul>
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="rationale_pa">
		<h2  class="sm"> Rationale for Skill </h2>
		<p id="pa">The rationale for choosing Problem Analysis skill is to be develop the ability to generate more than one possible solution
		for an identified problem. Being the combination of Hard-skill and Cognitive skill, it is quite
		difficult to generate multiple cause paths. Software Engineers tend to make decision based on their past experience
		for most of the time and it might be possible to use or define a cause-effect new path for that problem. This might be considered as a must have skill
		for any software engineer/ Business Analyst in near future and it is very important to develop the problem-solving skill and exploring the problem space.
		This skill helps in taking more informed decisions for solving a problem.</p>
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="roles_pa">
	<h2  class="sm"> Roles for Skill </h2>
	<ul style="list-style-type:square;">
	<li>Software Developer</li>
	<li>Software Designer</li>
	<li>Software Project Manager</li>
	<li>Software Tester</li>
	<li>Algorithm Developer</li>
	<li>Business Analyst</li>
	</ul>
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="work_pa">
		<h2  class="sm"> Work Related to Skill </h2>
		<ul style="list-style-type:square;">
		<li>Critical Thinking and breaking down a problem into more smaller sub-problems</li>
		<li>Requirement for having involvement of other group members</li>
		<li>Creating a new customized data structure or Algorithm</li>
		<li>Requirement Validation</li>
		<li>Changes in the system</li>
		<li>Collecting information for the similar kind problem that might have occured in the past</li>
		</ul>
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="example_pa">
		<h2  class="sm"> Real-World Example/ Scenario of Skill</h2>
		<strong><a href="https://global-sei.com/technology/tr/bn73/pdf/73-13.pdf"><u>Process Improvement Activities for Automotive Software[4]</a></u></strong><br>
		<br><p id="pa"> It is an example of automotive company where they tried to improve the process of manufacturing using software system
		after finding out the problem finding activity using 5 whys (problem analysis). They succeeded in getting the exact bug location in V-shaped software system.
		</p>

		<figure>
		<img class="img-fluid" src="images/pa/process-improve.png" style="margin-left: 10%; margin-right: 10% ;width: 600px; height:40%" alt="Process to improve Problem-Solving Techniques for V-shaped model system"></img>
		<figcaption><i> fig 2: Image of ideal analysis flow [4] </i></figcaption>
		</figure>

		<p id="pa">Here they proposed an analyzing method of the root causes for software problems. To prevent
		the recurrence of the same problems, they considered it to be necessary to logically identify the root causes and take appropriate
		measures. Therefore, the research team applied “the 5 whys analysis” [KATAOKA*,FURUTO,MATSUMOTO,2011]. </p>
		
		<figure>
		<img class="img-fluid" src="images/pa/result.png" style="margin-left: 10%; margin-right: 10% ;width: 600px; height:40%" alt="Sheet form to analyse a problem using 5 whys"></img>
		<figcaption><i> fig 3: Effectiveness [4] </i></figcaption>
		</figure>

		<p id="pa">They tried to create a form sheet for filling out the bug related details to answer 
		the 5 whys and concluded that problem analysis helps in reducing the lead time and also improves the 
		process quality effectively. </p><br>
		
		<strong>Other Few scenarios where Problem Analysis skill is required</strong><br>
		
		<ul> 
		<li>During Design Thinking</li>
		<li>During Problem Solving</li>
		<li>During Decision Making</li>
		</ul>
		
	</div>


	<div class="sm" id="academia_pa">
		<h2  class="sm"> Role of Academia or Industry in Cultivating the Skill </h2>
		<p id="pa">Academia is working rigorously to incorporate subjects/ assignments to make students understand the importance
		of probelm analysis in order to solve any given problem. This even helps in reducing the cognitive baises between stakeholders
		while iterating over the problem space. </p>
		<br>
		<p id="pa">E.g. Given a common problem or assignment to a class of students for solving it individually and then if 
		peer reviewing is allowed, students might get to learn new possible cause-effect paths one could have. 
		This might help them in developing problem analysis skill to think more creatively over a given problem 
		and might be able to create multiple solution path for any identified problem.</p>
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="tools_pa">
		<h2  class="sm" > Tools Supporting the Skill </h2>
	
		<div class="row" style="width:100%;">
		<div class="column" style = "width:50%; display:flex; align-content: center;">
		<div class="card" style = "width:100%; display:flex; align-content: center;">
					<a href="https://www.brighthubpm.com/project-planning/118441-problem-tree-a-comprehensive-analysis-tool/#:~:text=A%20problem%20tree%20analysis%20is,into%20a%20set%20of%20consequences.">
					<h3><u>Problem Tree Analysis</h4></u>
					<p>A problem tree analysis is a pictorial representation of a problem, its causes and 
					its consequences are fitted into the diagram on a hierarchical preference basis. This helps the 
					project team get a quick glance of how a range of complex issues contribute toward a problem and 
					how this problem branches out into a set of consequences.</p>
					</a>
				</div>
			</div>
		
			<div class="column" style = "width:50%; display:flex; align-content: center;">
			<div class="card" style = "width:100%; display:flex; align-content: center;">
					<a href="https://www.businessanalyststoolkit.com/mind-mapping-for-problem-solving/">
					<h3><u>Mind Mapping</h4></u>
					<p>This visual technique is used to outline information around a central word or phrase. 
					This central concept may form the known issue that may be causing the problem.</p>
					</a>
				</div>
			</div>
			</div>

			<div class="row" style="width:100%;">
			<div class="column" style = "width:50%; display:flex; align-content: center;">
			<div class="card" style = "width:100%; display:flex; align-content: center;">
					<a href="https://www.businessanalyststoolkit.com/five-whys-example/">
					<h3><u>The Five Whys</u></h4>
					<p>The Five Whys technique is simply the process of asking “why” enough times that you 
					eventually get to the root cause of a problem. It is an effective way to solving problems 
					that can be used by any business analyst to improve a business process or write better 
					requirements.</p>
					</a>
				</div>
			</div>

			<div class="column" style = "width:50%; display:flex; align-content: center;">
				<div class="card" style = "width:100%; display:flex; align-content: center;">
					<a href="https://www.businessanalyststoolkit.com/fishbone-analysis-example/">
					<h3><u>Fishbone Analysis</u></h4>
					<p>Like Mind Mapping, Fishbone Analysis is a visual technique for exploring a central problem 
					or concept. This tool is also called the Ishikawa Diagram as it was first used by Dr. Kaoru Ishikawa 
					of the University of Tokyo in 1943.</p>

					</a>
				</div>
			</div>
			</div>


		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="assessment_pa">
		<h2  class="sm"> Skill Self-Assessment </h2>
		<p id="pa"> <b> 4 </b>, I have a good knowledge and experience about the pre-requisites and the tools mentioned above. But, in order to 
		gain expertise in this skill, it does require you to have an experiential knowledge of doing this analysis for over a year and
		as it's a process by which you would be able to find the actual root cause which is affecting the system. 
		It requires you to reiterate over the problem space and forces you to cover as many branches as possible to get to the root cause of the solution. </p>

		<p id="pa"> Team collaboration is a necessity in order to get more insights after brainstorming and being in a distributed environment 
		it was not possible to try changing Hats trick (To think from all different perspectives).</p>
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="ref_pa">
		<h2  class="sm"> References </h2>
		<ul>
		<li><a id="pa" href="https://www.elo.iastate.edu/engl-309/problem-analysis/">[1] Elo.iastate.edu, 2020.</a></li>
		<li><a href="https://www.indeed.com/career-advice/resumes-cover-letters/hard-skills-vs-soft-skills#:~:text=Hard%20skills%20are%20technical%20knowledge,in%20your%20career%20or%20education">[2] Indeed.com, 2020. </a></li>
		<li><a href="//commons.wikimedia.org/w/index.php?title=User:KellyLawless&amp;action=edit&amp;redlink=1" class="new" title="User:KellyLawless (page does not exist)">[3] By KellyLawless</a> - <span class="int-own-work" lang="en">Own work</span>, <a href="https://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=30417444"><u>Open Link</u><a/></li>
		<li><a href="https://global-sei.com/technology/tr/bn73/pdf/73-13.pdf">[4] Global-sei.com, 2020.</a></li>
		</ul>
		<hr class="smSolid" ></hr>
	</div>	
`
    },
];