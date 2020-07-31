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
	<div class="sm">
		<h2  class="sm"> Name of Skill </h2>
		Reengineering
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Classification of Skill </h2>
		Technical
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Prerequisites for Skill </h2>
		Programming  
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Related Software Engineering Area(s)  </h2>
		Software Quality,Software Testing,Software Configuration Management
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Rationale for Skill </h2>
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm"><h2  class="sm"> Roles for Skill </h2>
		Requires skill to understand code written by others, helps to increase efficiency of the code.
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Work Related to Skill </h2>
		Refactor, Reverse eng, code restructuring, forward eng,redocumentation
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Real-World Example </h2>
		taking a legacy sofware and adapting to mordern systems.
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
					<h4>Lighthouse</h4>
					<p>Description</p>
				</div>
			</div>

			<div class="column">
				<div class="card">
					<h4>Dependency analyzer</h4>
					<p>Description</p>
				</div>
			</div>

			<div class="column">
				<div class="card">
					<h4>Disassembler</h4>
					<p>Description</p>
				</div>
			</div>


			<div class="column">
				<div class="card">
					<h4>PE and HEX editors</h4>
					<p>Description</p>
				</div>
			</div>

		</div>

		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Skill Self-Assessment </h2>
		5
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> References </h2>
		<hr class="smSolid" ></hr>
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
					creating multiple possible solution paths.`,
        text: `
	
	<hr style="solid 5px #bbb"></hr>
	<div class="sm">
		<h2  class="ps"> Name of Skill </h2>
		Problem Analysis
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="ps"> Classification of Skill </h2>
		Analytical (Problem-Solving)
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Prerequisites for Skill </h2>
		<ul style="list-style-type:square;">
		<li>Convergent Thinking</li>
		<li>Divergent Thinking</li>
		<li>Algorithms</li>
		<li>Decision-Making</li>
		<li>Data-Structures</li>
		<li>Knowledge of the Problem Domain</li>
		</ul>
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Related Software Engineering Area(s)  </h2>
		<ul style="list-style-type:square;">
		<li>Software Design</li>
		<li>Software Construction</li>
		<li>Software Management</li>
		</ul>
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Rationale for Skill </h2>
		<p>The rationale for choosing Problem Analysis skill is to be develop the ability to generate more than one possible solution
		for an identified problem. Being the combination of Soft-skill, Hard-skill and Cognitive skill, it is quite much
		difficult to generate multiple solution paths. Software Engineers tend to make decision based on their past experience
		for most of the time and it might be possible to use or define a new path for that problem. This might become a must skill
		for any software engineer in near future and it is very important to develop this skill in order to gain problem-solving skill.
		This skill helps in taking more informed decisions for solving a problem.</p>
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm"><h2  class="sm"> Roles for Skill </h2>
	<ul style="list-style-type:square;">
	<li>Software Developer</li>
	<li>Software Designer</li>
	<li>Software Project Manager</li>
	<li>Software Tester</li>
	<li>Algorithm Developer</li>
	</ul>
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Work Related to Skill </h2>
		<ul style="list-style-type:square;">
		<li>Critical Thinking and breaking down a problem into more smaller sub-problems</li>
		<li>Requirement for having involvement of other group members</li>
		<li>Creating a new customized data structure or Algorithm</li>
		<li>Requirement Validation</li>
		<li>Collecting information for the similar kind problem that might have occured in the past</li>
		</ul>
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Real-World Example </h2>
		<p>Company developing any new innovative software solutions after the complete analysis over a problem domain.</p>
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Role of Academia or Industry in Cultivating the Skill </h2>
		<p>Academia is working rigorously to incorporate subjects/ assignments to make students understand the importance
		of probelm analysis in order to solve any given problem.</p>
		<br>
		<p>E.g. Given a common problem or assignment to a class of students for solving it individually and then if 
		peer reviewing is allowed, students might get to learn new possible solutions path one could have. 
		This might help them in developing problem analysis skill to think more creatively over a given problem 
		and might be able to create multiple solution path for any problem.</p>
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm" > Tools Supporting the Skill </h2>

		<div class="row" style="padding-top:30px">
			
			<div class="column">
				<div class="card">
					<h4>Problem Tree Analysis</h4>
					<p>Description</p>
				</div>
			</div>

			<div class="column">
				<div class="card">
					<h4>Mind Maps</h4>
					<p>Description</p>
				</div>
			</div>

			<div class="column">
				<div class="card">
					<h4>Six Thinking Hats</h4>
					<p>Description</p>
				</div>
			</div>


			<div class="column">
				<div class="card">
					<h4>Rational Decision-Making Model</h4>
					<p>Description</p>
				</div>
			</div>

		</div>

		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Skill Self-Assessment </h2>
		<p>6, I have a good knowledge about the above mentioned pre-requisites and tools and also have used few of them 
		for finding user-centric sociteal problems. I want to apply the same tools and knowledge for generating mutilple solution paths
		in the software enviornment. 
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> References </h2>
		<hr class="smSolid" ></hr>
	</div>	
`
    },
];