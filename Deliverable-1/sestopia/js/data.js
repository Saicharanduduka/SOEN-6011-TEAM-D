const pageNotFoundMessage = `
<div class="col-10">
<h2 class="pb-3">Page Not Found</h2><hr style="solid 5px #bbb"></hr>
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
        description: `Lorem2 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. `,
        text: `<hr style="solid 5px #bbb"></hr>
	<div class="sm">
		<h2  class="sm"> Name of Skill </h2>
		User research and personas
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
	
<h2>Index</h2>
<div class="box" id="index">
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
		<h2  class="sm"> <a href="#index"> Name of Skill</a> </h2><hr style="solid 5px #bbb"></hr>
		
		Reengineering
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="cos">
		<h2  class="sm"> <a href="#index">Classification of Skill </a></h2>
		<hr style="solid 5px #bbb"></hr>
		Technical
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="pfs">
		<h2  class="sm"> <a href="#index">Prerequisites for Skill</a> </h2>
		<hr style="solid 5px #bbb"></hr>
		Programming  
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="rsfea">
		<h2  class="sm"><a href="#index"> Related Software Engineering Area(s) </a> </h2>
		<hr style="solid 5px #bbb"></hr>
		<ul class="sm">
			<li>Software Quality</li>
			<li>Software Testing</li>
			<li>Software Configuration Management</li>
		</ul>

		
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="rafs">
		<h2  class="sm"> <a href="#index">Rationale for Skill</a> </h2>
		<hr style="solid 5px #bbb"></hr>
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="rofs">
		<h2  class="sm"> <a href="#index">Roles for Skill </a></h2>
		<hr style="solid 5px #bbb"></hr>
		Requires skill to understand code written by others, helps to increase efficiency of the code.
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="wrts">
		<h2  class="sm"> <a href="#index">Work Related to Skill </a></h2>
		<hr style="solid 5px #bbb"></hr>
		<ul class="sm">
			<li>Refactor</li>
			<li>Reverse eng</li>
			<li>Code restructuring</li>
			<li>Forward eng</li>
			<li>Redocumentation</li>
		</ul> 
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="rwe">
		<h2  class="sm"><a href="#index">Real-World Example</a></h2>
		<hr style="solid 5px #bbb"></hr>
		taking a legacy sofware and adapting to mordern systems.
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="roai">
		<h2  class="sm"> <a href="#index">Role of Academia or Industry in Cultivating the Skill</a> </h2>
		<hr style="solid 5px #bbb"></hr>
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="tsts">
		<h2  class="sm" > <a href="#index">Tools Supporting the Skill </a></h2>
		<hr style="solid 5px #bbb"></hr>

		<div class="row" style="padding-top:50px">
			
			<div class="column">
				<a href="">
				<div class="card">
					<h4>Lighthouse</h4>
					<p>Description</p>
				</div>
					
				</a>
			</div>

			<div class="column">
				<a href="">
					<div class="card">
					<h4>Dependency analyzer</h4>
					<p>Description</p>
				</div>

				</a>
			</div>

			<div class="column">
				<a href="">
					<div class="card">
						<h4>Disassembler</h4>
						<p>Description</p>
					</div>					
				</a>
			</div>


			<div class="column">
				<a href="">
				<div class="card">
					<h4>PE and HEX editors</h4>
					<p>Description</p>
				</div>					
				</a>
			</div>

		</div>

		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="ssa">
		<h2  class="sm"><a href="#index"> Skill Self-Assessment</a> </h2>
		<hr style="solid 5px #bbb"></hr>
		5
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="r">
		<h2  class="sm"> <a href="#index">References </a></h2>
		<hr style="solid 5px #bbb"></hr>
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
			<h2  class="sm"> Name of Skill </h2>
			Scheduling
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> Classification of Skill </h2>
			Hard, Non-Technical.
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> Prerequisites for Skill </h2>
			Technical experience, critical thinking, anticipation skills.
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> Related Software Engineering Area(s)  </h2>
			Software Project Management, Software Developer, Risk management.
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> Rationale for Skill </h2>
			Time is a major concern in projects and in software projects its no different, being able to manage it through precise schedule can play an important role in project management giving the information needed to  provide solutions from risk management to providing all needs of the project across its life span.
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm"><h2  class="sm"> Roles for Skill </h2>
			Requires skill to understand code written by others, helps to increase efficiency of the code.
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> Work Related to Skill </h2>
			Project Manager, Risk Manager, Scrum Master, etc…
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
			6
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> References </h2>
			TODO:
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
