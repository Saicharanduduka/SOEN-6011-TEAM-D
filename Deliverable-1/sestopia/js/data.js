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
	<img src="icons/research.png" class="img-fluid skill-icon" alt="skill icon">
	<p class="text-capitalize"><strong>Software Design</strong></p>
	</a>
	</div>
	<div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
	<a href="?page=Software Quality">
	<img src="icons/file.png" class="img-fluid skill-icon" alt="skill icon">
	<p class="text-capitalize"><strong>Software Quality</strong></p>
	</a>
	</div>
	<div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
	<a href="?page=Software Maintenance">
	<img src="icons/code.png" class="img-fluid skill-icon" alt="skill icon">
	<p class="text-capitalize"><strong>Software Maintenance</strong></p>
	</a>
	</div>
	<div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
	<a href="?page=Software Process Measurement Techniques">
	<img src="icons/engineering.png" class="img-fluid skill-icon" alt="skill icon">
	<p class="text-capitalize"><strong>Software Process Measurement Techniques</strong></p>
	</a>
	</div>
	<div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
	<a href="?page=Software Testing">
	<img src="icons/test.png" class="img-fluid skill-icon" alt="skill icon">
	<p class="text-capitalize"><strong>Software Testing</strong></p>
	</a>
	</div>
	<div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
	<a href="?page=Software Requirements">
	<img src="icons/text.png" class="img-fluid skill-icon" alt="skill icon">
	<p class="text-capitalize"><strong>Software Requirements</strong></p>
	</a>
	</div>
	<div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
	<a href="?page=Software Engineering Management">
	<img src="icons/influencer.png" class="img-fluid skill-icon" alt="skill icon">
	<p class="text-capitalize"><strong>Software Engineering Management</strong></p>
	</a>
	</div>
	<div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
	<a href="?page=Computing Foundations">
	<img src="icons/problem.png" class="img-fluid skill-icon" alt="skill icon">
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
	<div class="sm">
		<h2  class="sm"> User Research and Personas </h2>
		<div class="author"><I> -by Pooja Dhir</I></div><br>
		<img class="imgWrap" src="icons/urandp.png">
		User Research is the study of users which include their needs and what they want. User researchers find crucial information that will lead them to design good UI.<br>
		Personas are fictional characters that are created using user research which might use your product, service, site, etc. It helps the designer to understand the user's needs, experiences, behaviors, and goals.
		
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Classification of Skill </h2>
		User research can be classified into two categories:<br><br>
<b>A) Quantitative research</b><br>
In quantitative techniques, for example, surveys, investigation, and formal trials, the researcher tries to quantify parts of users and user behavior in a manner that can be measured and used for factual examination. Best practice for quantitative strategies is to gather target estimations that are unbiased by the researcher’s theories, presence, and personality. Getting an example of users who can represent the entire user population in a factually important manner regularly requires many research participants. Quantitative Research utilizes quantifiable information to detail realities and reveals designs in research. Quantitative data collection techniques are considerably more organized than Qualitative data collection methods.<br><br>
<b>B) Qualitative research</b><br>
Qualitative techniques, for example, interviews, case studies, observation, group discussion, open-ended questionnaires, and (somewhat) ease of use tests are frequently more exploratory and look to get a more inside and out comprehension of the individual users’ or user group’s experiences, motivations, and regular daily existences. In qualitative methods, the researcher acknowledges that he/she is somewhat a co-maker of research results, so the outcomes are not totally objective and reproducible. The results of qualitative research are normally not communicated numerically, yet rather as topics or classifications that have happened during the research. It is used to increase an understanding of fundamental reasons, opinions, and motivations. It gives bits of knowledge into the issue or assists with creating thoughts or theories for potential quantitative research. Qualitative Research is additionally used to reveal patterns in thought and opinions, and dive deeper into the issue. It gives detailed information including knowledge about behavior, attitude, and aptitude of the user.<br>

		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Prerequisites for Skill </h2>
		<ul>
		<li>Experience conducting user research</li>
		<li>Experience with qualitative and user-centered design methodologies</li>
		<li>Working knowledge of quantitative, behavioral analysis and statistics</li>
		<li>Surveys and formal experiments</li>
		<li>Critical-thinking and problem-solving skills</li>
		</ul> 
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Related Software Engineering Area(s)  </h2>
		<ul>
		<li>Software Requirements</li>
		<li>Software Quality</li>
		<li>Software Engineering Professional Practice</li>
		</ul> 
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Rationale for Skill </h2>
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


	<div class="sm"><h2  class="sm"> Roles for Skill </h2>
	<ul>
		<li><b>UX Researcher</b> – Study the requirements of target user and create personas</li>
		<li><b>Information Architect</b> – They ensure a positive user experience by making the information accessible, logical and well organized.</li>
		<li><b>Usability analyst</b> – They focus on a very specific aspect of user experience :Usability</li>
		<li><b>UX writer</b> – They are the interaction between user experience design, copywriting and branding.</li>
		<li><b>UX Designer</b> – They conduct user research, design, write ux copy, validate/test with user and sell/present the design solution to the business.</li>
		</ul> 
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Work Related to Skill </h2>
		<ul>
		<li>Brainstorming</li>
		<li>Usability testing</li>
		<li>Field studies</li>
		<li>Analytical Evaluation</li>
		</ul> 
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Real-World Example </h2>
		<center><img class="real" src="icons/UserResearchExample.png">
		<figcaption>Usability Lab</figcaption></center>
		This is the real world scenario where the user is being monitored. It involves recording the performance of the user doing typical tasks. This research is in a controlled environment setting. The person sitting inside with the user is evaluating user satisfaction using questionnaires and interviews. Goals and questions focus on how well she understands the product and perform a task. This testing is done with the goal that we can comprehend what changes are expected to cause things to go in the correct way.
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Role of Academia or Industry in Cultivating the Skill </h2>
		<b>Academia </b><br>
What we understand in Academic courses is that user research is all about recording videos, audios, gathering information from users about their needs. Most popular surveys, interviews, questionnaires, observation, studying documentation, etc are enough to be a UX Researcher. But in the real-world it is more than that. One should know the Design Principles, Usability principles, Mental Model, Personas, etc which includes the requirement and how to make a good design.<br>
<b>Industry</b><br>
While in industry researcher builds information about their users to serve the user network they work, but their approach is heavily influenced by the company’s business plan. The business benefit is determined by conveying value to the user, for instance, research to design a better customer experience will contribute to uplift in usage, patronage, and profit. Benefit, competition, and innovation shape the approach of the Industry UX Researcher.<br>

		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm" > Tools Supporting the Skill </h2>
		There are many tools which support the skill. But here are some best tools which help to make UX researchers jobs easy. <br>
		<div class="row" style="padding-top:70px">
			
			<div class="column">
				<div class="card">
					<h4>Bugsee</h4>
					<p>Bugsee is a mobile analytics solution that focuses mostly on bug/crash reporting. It provides mobile professionals with tools like crashed session recordings, console logs, and network traffic analysis, all of which permit you and your team to track bug/crashes more efficiently and save time and resources.</p>
				</div>
			</div>

			<div class="column">
				<div class="card">
					<h4>Appsee</h4>
					<p>Appsee is the pioneer of Qualitative Analytics. It is one of the main stages to present this approach and use it to give versatile experts better devices to understand their users and optimize their user experience & performance to perfection. Unlike Bugsee, Appsee isn't just centered around bug/crash reporting yet in addition gives a wide range of solutions to assist you to monitor and optimize different aspects of your app.</p>
				</div>
			</div>

			<div class="column">
				<div class="card">
					<h4>Lookback.io</h4>
					<p>Lookback.io is a versatile user-research platform, permitting UI/UX designers and mobile professionals to perform remote user research, communicate with users in real-time, perform individual test research on user’s end with pre-defined goals and set up a face to face application tests.Lookback.io also provides its users a strong dashboard where they can monitor their movement and replay tests at any given time.</p>
				</div>
			</div>


			<div class="column">
				<div class="card">
					<h4>Smaply</h4>
					<p>Smaply helps you to create personas. You can create a clear persona for your user which holds the information of the user. They are easy to duplicate and edit, and you can quickly switch between multiple personas and export them as PDF.</p>
				</div>
			</div>

		</div>

		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Skill Self-Assessment </h2>
		<b>8</b><br>
User research and persona is one of the important skill to start any project. If you don’t know what your user wants you to end with making an unsuccessful product. I have taken the subject “Human-Computer Interface Design” where I discovered how good design plays a role in successful products. Therefore, this subject has given me the opportunity to learn in-depth and enhance my knowledge in this area. But, this skill is a part of UI development. In order to self assess my score to 10 I would want to gain proficiency with all skills that come in UI development, which will give a kick start to my career.

		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> References </h2>
		<ul>
		<li><a href="https://www.interaction-design.org/literature/topics/personas">https://www.interaction-design.org/literature/topics/personas</a></li>
		<li><a href="https://www.interaction-design.org/literature/article/best-practices-for-qualitative-user-research">https://www.interaction-design.org/literature/article/best-practices-for-qualitative-user-research</a></li>
		<li><a href="https://www.springboard.com/blog/becoming-a-ux-researcher/#:~:text=Experience%20conducting%20user%20research,thinking%20and%20problem%2Dsolving%20skills">https://www.springboard.com/blog/becoming-a-ux-researcher/#:~:text=Experience%20conducting%20user%20research,thinking%20and%20problem%2Dsolving%20skills</a></li>
		<li><a href="https://www.invisionapp.com/inside-design/5-ux-specialties/">https://www.invisionapp.com/inside-design/5-ux-specialties/</a></li>
		<li><a href="https://usabilitygeek.com/best-ux-tools-user-research-user-testing-2018/">https://usabilitygeek.com/best-ux-tools-user-research-user-testing-2018/</a></li>
		<li><a href="https://medium.com/@kate.r.storey/industry-ux-researcher-vs-academic-hci-researcher-d13a7283fbf0">https://medium.com/@kate.r.storey/industry-ux-researcher-vs-academic-hci-researcher-d13a7283fbf0</a></li>
		<hr class="smSolid" ></hr>
	</div>	`,


    },
    {
        title: `Software Quality`,
        description: `Lorem3 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. `,
        text: `
	
	<hr style="solid 5px #bbb"></hr>
	<div class="sm">
		<h2  class="sm"> Name of Skill </h2>
		Conducting Reviews and Audits
		<hr class="smSolid" ></hr>
	</div>
	<div class="sm">
		<h2  class="sm"> Classification of Skill </h2>
		Management Reviews, Technical Reviews, Inspections, Walkthroughs
		<hr class="smSolid" ></hr>
	</div>
	<div class="sm">
		<h2  class="sm"> Prerequisites for Skill </h2>
		Functional and Technical Understanding of the system  
		<hr class="smSolid" ></hr>
	</div>
	<div class="sm">
		<h2  class="sm"> Related Software Engineering Area(s)  </h2>
		Software Requirements,Software Testing
		<hr class="smSolid" ></hr>
	</div>
	<div class="sm">
		<h2  class="sm"> Rationale for Skill </h2>
		<hr class="smSolid" ></hr>
	</div>
	<div class="sm"><h2  class="sm"> Roles for Skill </h2>
		 Decision maker (i.e., software lead), a Review leader, a recorder, and checkers (technical staff members who examine the work-products). 
		<hr class="smSolid" ></hr>
	</div>
	<div class="sm">
		<h2  class="sm"> Work Related to Skill </h2>
		Examination of software engineering artifacts with respect to standards that have been established by the organization or project for those artifacts.
		
		<hr class="smSolid" ></hr>
	</div>
	<div class="sm">
		<h2  class="sm"> Real-World Example </h2>
		Management reviews evaluate actual project results with respect to plans.
        Technical reviews (including inspections, walkthrough, and desk checking) examine engineering work-products.
		
		<hr class="smSolid" ></hr>
	</div>
	<div class="sm">
		<h2  class="sm"> Role of Academia or Industry in Cultivating the Skill </h2>
		<hr class="smSolid" ></hr>
	</div>
	<div class="sm">
		<h2  class="sm" > Tools Supporting the Skill </h2>
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
	<div class="sm">
		<h2  class="sm"> Skill Self-Assessment </h2>
		6
		<hr class="smSolid" ></hr>
	</div>
	<div class="sm">
		<h2  class="sm"> References </h2>
		https://www.softwaretestinghelp.com/code-review-tools/
		https://www.guru99.com/software-quality-assurance-test-audit-review-makes-your-life-easy.html
		http://www.qasigma.com/2008/12/sqa-audit.html
		<hr class="smSolid" ></hr>
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
		<ul>
			<li><a href="#nos">1. Name of Skill.</a></li>
			<li><a href="#cos">2. Classification of Skill.</a></li>
			<li><a href="#pfs">3. Prerequisites for Skill.</a></li>
			<li><a href="#rsfea">4. Related Software Engineering Area(s).</a></li>
			<li><a href="#rafs">5. Rationale for Skill. </a></li>
			<li><a href="#rofs">6. Roles for Skill.</a></li>
			<li><a href="#wrts">7. Work Related to Skill.</a></li>
			<li><a href="#rwe">8. Real-World Example/Scenario of Skill.</a></li>
			<li><a href="#roai">9. Role of Academia or Industry in Cultivating the Skill.</a></li>
			<li><a href="#tsts">10. Tools Supporting the Skill.</a></li>
			<li><a href="#ssa">11. Skill Self-Assessment.</a></li>
			<li><a href="#r">12. References.</a></li>
		</ul>	
	</div>




	<div class="sm" id="nos">
		
		<h2  class="sm"> <a href="#index"> Reengineering</a> </h2>
		<hr style="solid 5px #bbb"></hr>
		<img src="images/sm/smpm.png" style="float:right; width:30% ">
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
			<ul >
				<li><b>Corrective:</b></br> Maintenance performed to correct faults in hardware or software, maintenance involves testing to detect a problem and injecting a fix without disturbing the rest of the system.</li>
				<li><b>Adaptive:</b></br> Software maintenance performed to make a computer program usable in a changed environment (business rules, government policy, software platforms, hardware upgrades, etc.)</li>
				<li><b>Perfective:</b></br> Software maintenance performed to improve the performance, maintainability, or other attributes of a computer program.</li>
				<li><b>Preventive:</b></br> Maintenance performed for the purpose of preventing problems before they occur.</li>
			</ul>
			</div>
			<div class="col">
			<img src="images/sm/mainttypes.png" >
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
		
		<h5></h5>
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
				<img src="images/sm/ekms.png">
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
				<img src="images/sm/legacy.jpg" style="width:500px;">
			</div>
			<div class="col" style="text-align: center">
				<h5>New architecture</h5>
				<img src="images/sm/new.jpg" style="width:500px;">
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
			<ul style="margin-top:30px; margin-bottom:30px;">
				<li>1. There is a big shortage of educational materials for teaching software reengineering.</li>
				<li>2. Selecting the suitable materials (that balance theory and practice) and the right tool(s) for the level of students and depth of coverage required is a difficult task</li>
				<li>3. Teaching reengineering using toy exercises and assignments does not convey the practical aspects of the subject</li>
			</ul> 
			
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
				<img style="float:right;" src="images/sm/DMS.png">
			</a>
			
		</div>
		
		<div class="row" style="padding-top:50px">
			<a href="https://www.hex-rays.com/products/ida/"  target="_blank" style = "width:45%;  display:flex;">
				<div class="card">
					<h5>Disassemblers</h4>
					<p>A disassembler is a program that translates an executable file to assembly language. The most popular one is IDA Pro</p>
					<img src="images/sm/hexray.png" style="height:50%; width:100%">
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
							<img src="images/sm/ollydbg.gif">
							<p>OllyDbg</p>
						</a>
					</div >

					
					<div class="column" style="width:33%">
						<a href="http://www.windbg.org/" target="_blank">
							<img src="images/sm/windbg.png" style="height:55px; width:55px">
							<p>WinDbg</p>
						</a>
					</div>					
					
					<div class="column" style;"width:33%">
						<a href="https://www.microsoft.com/uk-ua/p/windbg-preview/9pgjgd53tn86?activetab=pivot:overviewtab" target="_blank">
							<img src="images/sm/windbgp.png" style="height:55px; width:55px">
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
		<ul>

			<li>
				<a href="http://www.sdibo.com/maintenance" target="_blank" style="color:blue">
				1. http://www.sdibo.com/maintenance
				</a>
			</li>

			<li>
				<a href="https://www.scnsoft.com/blog/legacy-software-reengineering-guide" target="_blank" style="color:blue"> 
				2. https://www.scnsoft.com/blog/legacy-software-reengineering-guide
				</a>
			</li>
			
			<li>
				<a href="https://www.linkedin.com/pulse/software-reengineering-successful-implementation-vasiliy-soloshchuk-1/" target="_blank" style="color:blue">
				3. https://www.linkedin.com/pulse/software-reengineering-successful-implementation-vasiliy-soloshchuk-1/
				</a>
			</li>
			
			<li>
				<a href="https://sci-hub.tw/10.1145/1134285.1134395" target="_blank" style="color:blue" id="r4">
				4. https://sci-hub.tw/10.1145/1134285.1134395
				</a>
			</li>

			<li>
				<a href="http://www.semdesigns.com/Products/DMS/DMSToolkit.html" target="_blank" style="color:blue">
				5. http://www.semdesigns.com/Products/DMS/DMSToolkit.html 
				</a>
			</li>
			
			<li>	
				<a href="https://www.indeed.com/q-Software-Reengineering-jobs.html?vjk=eb6e6645a6c23836" target="_blank" style="color:blue">
				6. https://www.indeed.com/q-Software-Reengineering-jobs.html?vjk=eb6e6645a6c23836" 
				</a>
			</li>

			<li>
				<a href=https://hiring.monster.com/employer-resources/job-description-templates/software-engineer-job-description-sample/" target="_blank" style="color:blue">
				7. https://hiring.monster.com/employer-resources/job-description-templates/software-engineer-job-description-sample/
				</a>
			</li>
		</ul>

	</div>	
`
    },
    {
        title: `Software Process Measurement Techniques`,
        description: `<hr border-top: 3px solid #bbb;></hr>
		<br>The evaluation of software processes is nowadays a
		very important issue due to the growing 
		interest of software companies in the improvement of the productivity and quality of delivered products. 
		Software measurement plays a fundamental role here. Given the great diversity of entities which are candidates 
		for measurement in the software process improvement context`,
        text: `
		<hr style="solid 5px #bbb"></hr>
		<div class="sm">
			<h2  class="sm"> Name of Skill </h2>
			Software Process Measurement Techniques
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> Classification of Skill </h2>
			Quantitative Process Measurement Techniques
            Qualitative Process Measurement Techniques
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> Prerequisites for Skill </h2>
			Technical experience, Project Management Experience
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> Related Software Engineering Area(s)  </h2>
			Software Engineering Process.
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> Rationale for Skill </h2>
			 The purpose of quantitative process measurement techniques is to collect, transform, and analyze quantitative process and work product data that can be used to indicate where process improvements are needed and to assess the results of process improvement initiatives. Quantitative process measurement techniques are used to collect and analyze data in numerical form
			 to which mathematical and statistical techniques can be applied..
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm"><h2  class="sm"> Roles for Skill </h2>
			
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> Work Related to Skill </h2>
			Project Manager,  Scrum Master, etc…
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> Real-World Example </h2>
			TODO:
		</div>
		<div class="sm">
			<h2  class="sm"> Role of Academia or Industry in Cultivating the Skill </h2>
			TODO:
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm" > Tools Supporting the Skill </h2>
			<div class="row" style="padding-top:70px">
				
				<div class="column">
					<div class="card">
						<h4>GenMETRIC</h4>
						<p>Description</p>
					</div>
				</div>
				<div class="column">
					<div class="card">
						<h4></h4>
						<p>Description</p>
					</div>
				</div>
			</div>
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> Skill Self-Assessment </h2>
			
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> References </h2>
			TODO:
			<hr class="smSolid" ></hr>
		</div>	
		<a href="./index.html">Return Home</a>

		`,
    },
    {
        title: `Software Testing`,
        description: `Lorem5 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. `,
        text: `<p>Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. Maecenas sit amet nisl arcu. Aenean sagittis tempor felis, at facilisis nulla mattis vel. Duis sed magna cursus, pharetra enim a, vehicula sem. Phasellus velit ex, porttitor quis tempor in, congue sed felis. Aliquam accumsan tellus ac lectus porta dictum. Duis imperdiet, purus id ultricies ullamcorper, quam nibh dictum felis, sit amet volutpat enim arcu et lacus. In eget massa feugiat metus laoreet varius. Praesent finibus eget nunc ut finibus. Praesent vitae tincidunt orci. Pellentesque vulputate nisl sed nunc tempor blandit.</p>
    	
    	<div class="sm">
		<h2  class="sm"> Name of Skill </h2>
		Writing Unit Testing
		<hr class="smSolid" ></hr>
		</div>


		<div class="sm">
			<h2  class="sm"> Classification of Skill </h2>
			Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. Maecenas sit amet nisl arcu.
			<hr class="smSolid" ></hr>
		</div>


		<div class="sm">
			<h2  class="sm"> Prerequisites for Skill </h2>
			Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. Maecenas sit amet nisl arcu.  
			<hr class="smSolid" ></hr>
		</div>


		<div class="sm">
			<h2  class="sm"> Related Software Engineering Area(s)  </h2>
			Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. Maecenas sit amet nisl arcu.
			<hr class="smSolid" ></hr>
		</div>


		<div class="sm">
			<h2  class="sm"> Rationale for Skill </h2>
			<hr class="smSolid" ></hr>
		</div>


		<div class="sm"><h2  class="sm"> Roles for Skill </h2>
		Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. Maecenas sit amet nisl arcu.
			<hr class="smSolid" ></hr>
		</div>


		<div class="sm">
			<h2  class="sm"> Work Related to Skill </h2>
			Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. Maecenas sit amet nisl arcu.
			<hr class="smSolid" ></hr>
		</div>


		<div class="sm">
			<h2  class="sm"> Real-World Example </h2>
			Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. Maecenas sit amet nisl arcu.
			<hr class="smSolid" ></hr>
		</div>


		<div class="sm">
			<h2  class="sm"> Role of Academia or Industry in Cultivating the Skill </h2>
			<hr class="smSolid" ></hr>
		</div>


		<div class="sm">
				<h2  class="sm" > Tools Supporting the Skill </h2>

			<div class="row" style="padding-top:70px">
			
				<div class="column">
					<div class="card">
						<h4>TOOL1</h4>
						<p>Description</p>
					</div>
				</div>

				<div class="column">
					<div class="card">
						<h4>TOOL2</h4>
						<p>Description</p>
					</div>
				</div>

				<div class="column">
					<div class="card">
						<h4>TOOL3</h4>
						<p>Description</p>
					</div>
				</div>


				<div class="column">
					<div class="card">
						<h4>TOOL4</h4>
						<p>Description</p>
					</div>
				</div>

			</div>

			<hr class="smSolid" ></hr>
		</div>


		<div class="sm">
			<h2  class="sm"> Skill Self-Assessment </h2>
			Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. Maecenas sit amet nisl arcu.
			<hr class="smSolid" ></hr>
		</div>


		<div class="sm">
			<h2  class="sm"> References </h2>
			<hr class="smSolid" ></hr>
		</div>	

		<p><a href="./index.html">Return Home</a></p>`
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
			<img class="real" src="images/DeliverableBased.jpg">
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
	<h2>Table of Contents</h2>
	<div class="boxpa" id="table_pa">
		<ol>
			<li><a href="#name_pa">Name of Skill.</a></li>
			<li><a href="#class_pa">Classification of Skill.</a></li>
			<li><a href="#pre_pa">Prerequisites for Skill.</a></li>
			<li><a href="#areas_pa">Related Software Engineering Area(s).</a></li>
			<li><a href="#rationale_pa">Rationale for Skill. </a></li>
			<li><a href="#roles_pa">Roles for Skill.</a></li>
			<li><a href="#work_pa">Work Related to Skill.</a></li>
			<li><a href="#example_pa">Real-World Example/Scenario of Skill.</a></li>
			<li><a href="#academia_pa">Role of Academia or Industry in Cultivating the Skill.</a></li>
			<li><a href="#tools_pa">Tools Supporting the Skill.</a></li>
			<li><a href="#assessment_pa">Skill Self-Assessment.</a></li>
			<li><a href="#ref_pa">References.</a></li>
		</ol>	
	</div>
	<hr style="solid 5px #bbb"></hr>
	
	<div class="sm" id="name_pa">
		<figure>
		<img src="images/pa/root.jpg" style="float:right; width:50%" alt="Root Cause Analysis Figure">
		</figure>
		
		<h2  class="ps" > Name of Skill </h2><br>
		
		<b>Problem Analysis</b><br>
		
		<p>It is often termed as <b>Root Cause Analysis</b> and is a method of Problem-Solving. It is used for identifying the root causes of
		faults or problems [1].</p>
		
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="class_pa">
		<h2  class="ps" > Classification of Skill </h2>
		It can be classified as <u>Hard Technical Skill</u> <br>
		<p> Hard skills are technical knowledge or training that you have gained through any life experience, 
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
		<p>The rationale for choosing Problem Analysis skill is to be develop the ability to generate more than one possible solution
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
		<h2  class="sm"> Real-World Example </h2>
		<p>Company developing any new innovative software solutions after the complete analysis over a problem domain.</p>
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="academia_pa">
		<h2  class="sm"> Role of Academia or Industry in Cultivating the Skill </h2>
		<p>Academia is working rigorously to incorporate subjects/ assignments to make students understand the importance
		of probelm analysis in order to solve any given problem. This even helps in reducing the cognitive baises between stakeholders
		while iterating over the problem space. </p>
		<br>
		<p>E.g. Given a common problem or assignment to a class of students for solving it individually and then if 
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
					<h4><u>Problem Tree Analysis</h4></u>
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
					<h4><u>Mind Mapping</h4></u>
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
					<h4><u>The Five Whys</u></h4>
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
					<h4><u>Fishbone Analysis</u></h4>
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
		<p> 5, I have a good knowledge and experience about the pre-requisites and the tools mentioned above. But, in order to 
		gain expertise in this skill, it does require you to have an experience of doing this analysis for over a year and
		there's no concrete standard way of getting one perfect solution to any problem. It's always to iterate over the solution and strategies
		to cover as many branches as possible to get to the root cause of the solution. </p>

		<p> It does require team collaboration and being in a distributed environment it was not feasible to think to change hats and stick the 
		maybe problems on any whiteboard or to draw one Fishbone diagram by only the insights of one's mind</p>
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="ref_pa">
		<h2  class="sm"> References </h2>
		<ul>
		<li><a href="https://www.elo.iastate.edu/engl-309/problem-analysis/">[1] Elo.iastate.edu, 2020.</a></li>
		<li><a href="https://www.indeed.com/career-advice/resumes-cover-letters/hard-skills-vs-soft-skills#:~:text=Hard%20skills%20are%20technical%20knowledge,in%20your%20career%20or%20education">[2] Indeed.com, 2020. </a></li>
		<li>[3] By <a href="//commons.wikimedia.org/w/index.php?title=User:KellyLawless&amp;action=edit&amp;redlink=1" class="new" title="User:KellyLawless (page does not exist)">KellyLawless</a> - <span class="int-own-work" lang="en">Own work</span>, <a href="https://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=30417444"><u>Link</u><a/></li>
		</ul>
		<hr class="smSolid" ></hr>
	</div>	
`
    },
];
