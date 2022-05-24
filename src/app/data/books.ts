const books = [
    {
        id: "2e73aab2-9c4b-4938-8494-b291f2331ae7",
        title: "Factors Bedfordshire interactive",
        description:
            "Velit dolorem occaecati doloremque sunt ratione minima unde. Reiciendis qui ad incidunt mollitia voluptas iusto perferendis id. Cum animi nesciunt saepe. In atque sapiente id minima molestiae hic. Vero consequatur eum ipsam consequatur eum maiores.",
        genre: "Fantasy",
        author: "Enid Abbott",
        year_published: "2017-08-12T13:57:46.156Z",
        available: true,
        last_borrower: null
    },
    {
        id: "75f2e5bf-9f38-409c-adcb-0794971d8347",
        title: "portals engineer Cambridgeshire",
        description:
            "Et rerum blanditiis quisquam vitae voluptatem quia ab. Nulla assumenda odio veniam itaque qui dignissimos impedit. Dolorem laborum itaque totam dolorem. Sapiente nihil et voluptas. Praesentium ea nulla laudantium.",
        genre: "Comics",
        author: "Hellen Daniel",
        year_published: "2007-12-01T05:07:11.202Z",
        available: true,
        last_borrower: null
    },
    {
        id: "61f9105e-d8a8-4884-b3fa-668589564360",
        title: "Rapids harness Ergonomic",
        description:
            "Placeat voluptates eum eos est. Rerum est sunt. Aut sed accusamus. Et voluptatem ipsum quam. Et asperiores et ea nihil et voluptas incidunt et. Aut voluptatem dolore ut earum eveniet similique ex voluptatem fugit.",
        genre: "Horror",
        author: "Gustave Kuphal",
        year_published: "2014-01-04T20:31:01.190Z",
        available: true,
        last_borrower: null
    },
    {
        id: "d292b18b-101f-47a7-b415-065df9ca8951",
        title: "magenta Avon holistic",
        description:
            "A dolore quisquam sed et non quisquam qui pariatur. Magni itaque nesciunt amet. Qui cum id qui et aliquam numquam omnis et. Temporibus magni vitae praesentium quam molestiae maiores voluptatem ipsum consequuntur.",
        genre: "Comics",
        author: "Delbert Ernser",
        year_published: "2003-11-11T01:58:55.477Z",
        available: false,
        last_borrower: null
    },
    {
        id: "0878f2ca-0323-4fbc-9183-2fed231570c0",
        title: "withdrawal redefine calculate",
        description:
            "Sed voluptatem qui voluptatum possimus dolorum sunt dolorum. Dolor et reiciendis ipsum possimus. Quo consequuntur ut vel est. Debitis consequatur placeat nisi et.",
        genre: "Romance",
        author: "Napoleon Hahn",
        year_published: "2002-03-06T21:13:50.079Z",
        available: false,
        last_borrower: null
    },
    {
        id: "e70dba0a-c1ca-4ff4-8a5f-65487cc84270",
        title: "Dollar Shoes Clothing",
        description:
            "Sed nam molestiae. Id cumque sapiente est distinctio facere explicabo omnis quo occaecati. Et molestias occaecati tempore aut qui velit. Consequatur accusantium atque dolorem amet. Numquam sit at. Sunt id corrupti nemo doloribus voluptate pariatur aliquam rem odit.",
        genre: "Biography",
        author: "Maurine Waters",
        year_published: "2013-04-02T23:09:07.690Z",
        available: true,
        last_borrower: null
    },
    {
        id: "e18397ab-576d-489a-9ab5-a7a04312c5c1",
        title: "Loan deposit synthesize",
        description:
            "Autem aliquam quo placeat voluptates est deserunt tempora nam aut. Sint velit et ut rerum quisquam. Illo neque qui sunt laudantium tenetur harum autem. Error quod repellendus qui quia pariatur nam odio. Omnis voluptatem et qui eaque ea ab consequatur magni.",
        author: "Payton Bednar",
        year_published: "2012-11-23T04:40:58.122Z",
        available: true,
        last_borrower: null
    },
    {
        id: "db699298-2853-4f71-81ba-35757962cf91",
        title: "SDR Money IB",
        description:
            "Blanditiis libero sit quidem quis aut enim nostrum asperiores. Nihil sunt dolorum. Voluptatibus accusamus vitae rerum aperiam laudantium dolorem laudantium at laboriosam. Adipisci aut debitis maiores non dolores iusto non ut.",
        genre: "Sci-Fi",
        author: "Houston Stehr",
        year_published: "2004-08-24T05:36:48.149Z",
        available: false,
        last_borrower: null
    },
    {
        id: "5fa3a899-5f33-4a77-ac76-4e68581c90f5",
        title: "New Reduced Investor",
        description:
            "Qui velit ut magni sit. Nihil quos sed placeat necessitatibus cum incidunt autem consequatur. Eveniet labore eos. Ipsam eos dolor eaque animi eveniet eius.",
        genre: "Mystery",
        author: "Muhammad Beer",
        year_published: "2011-01-19T06:35:44.839Z",
        available: false,
        last_borrower: null
    },
    {
        id: "2a7b5fdb-d7d2-43a7-8941-87e8a6b8ad19",
        title: "enhance Luxurious primary",
        description:
            "Et velit ad sit aspernatur quam architecto et suscipit enim. Ipsam quia deleniti possimus. Labore unde excepturi sit distinctio qui qui temporibus explicabo porro. Neque voluptas non consequatur aut facilis modi impedit cum. Exercitationem omnis doloremque porro illo et.",
        genre: "Mystery",
        author: "Cecelia Corwin",
        year_published: "2007-11-07T04:46:45.938Z",
        available: false,
        last_borrower: null
    },
    {
        id: "69e37789-358d-4d18-a7d8-2296463d8e21",
        title: "Quetzal Loan Flat",
        description:
            "Reiciendis dolorem eos qui ex ratione fugit. Qui aspernatur aliquam labore necessitatibus iusto et. Ut quas voluptatem eos accusantium ad optio qui quia.",
        genre: "Biography",
        author: "Gay Stanton",
        year_published: "2009-10-15T14:01:13.341Z",
        available: false,
        last_borrower: null
    },
    {
        id: "4881ab2c-3763-4e1a-91c1-fa499af9441b",
        title: "alarm TCP Berkshire",
        description:
            "Incidunt sit dolores accusamus facilis nostrum. Doloribus et explicabo quidem aut suscipit est est iste. Iusto et repudiandae. Sed sapiente consequatur ad officiis qui.",
        genre: "Thriller",
        author: "Dorian Hermann",
        year_published: "2003-06-11T03:17:04.948Z",
        available: true,
        last_borrower: null
    },
    {
        id: "3c1d0d1a-f3f7-4140-865f-ae5822eb4de8",
        title: "payment Planner schemas",
        description:
            "Et sit expedita dolorum enim quidem nam esse. Quis consequatur labore placeat eum eius. Corrupti id ratione eum et rem est dolore. Consequatur cumque et consequatur quae fuga officia dignissimos. Aut molestiae impedit ut eum qui optio culpa. Et in beatae quis voluptatem qui et nostrum.",
        genre: "Mystery",
        author: "Adrain Daugherty",
        year_published: "2006-10-01T08:14:41.144Z",
        available: true,
        last_borrower: null
    },
    {
        id: "b46bfbbe-58a8-4bb3-8bcf-119471de015e",
        title: "Specialist Money SAS",
        description:
            "Necessitatibus nihil et. Enim rerum pariatur molestias molestiae. Aut voluptatem delectus quis.",
        genre: "Historic Fiction",
        author: "Percy Jakubowski",
        year_published: "2000-03-12T19:28:57.859Z",
        available: false,
        last_borrower: null
    },
    {
        id: "1e1b8905-4cb7-44ee-8717-3ef6777cf21d",
        title: "Villages quantifying Station",
        description:
            "Ut ullam enim rem iure soluta consequatur sed. Ex repellendus vero sit suscipit rerum perspiciatis optio. Ab voluptatibus accusamus. Nobis vel laborum nam quis occaecati fugiat quidem.",
        genre: "Comics",
        author: "Rosina Ondricka",
        year_published: "2000-08-14T09:39:40.224Z",
        available: false,
        last_borrower: null
    },
    {
        id: "d345fc50-abb9-4e6a-94e6-3f775cee0c8c",
        title: "Balboa Modern program",
        description:
            "Laboriosam id eligendi at id a corporis. Quia saepe omnis voluptas velit quasi maxime quis. Saepe autem ab sunt aut itaque. Autem perferendis asperiores temporibus magnam et libero reiciendis.",
        genre: "Biography",
        author: "Brandt Romaguera",
        year_published: "2003-12-29T17:05:46.684Z",
        available: false,
        last_borrower: null
    },
    {
        id: "e61c54ea-0a08-4ec1-b36a-7209a83a1273",
        title: "Virginia RSS Assurance",
        description:
            "Recusandae provident hic. Ut ad odio impedit dolore molestiae. Ut asperiores tempora delectus. Repudiandae deserunt eos quisquam maxime consequatur molestias. Ullam dicta totam illum iste.",
        author: "Kennith Aufderhar",
        year_published: "2011-10-01T07:35:11.789Z",
        available: false,
        last_borrower: null
    },
    {
        id: "5493d6c7-8c39-4500-b030-dde8c5b22c76",
        title: "Beauty Investor protocol",
        description:
            "Est aliquid sint quia sed. Voluptas similique pariatur temporibus qui minus hic rem. Neque voluptatem doloremque harum quis quis vero temporibus. Quo doloribus aut sequi odio quo excepturi est. Voluptas quia est voluptatem et doloribus.",
        genre: "Sci-Fi",
        author: "Dallin Rolfson",
        year_published: "2010-12-15T21:57:48.552Z",
        available: true,
        last_borrower: null
    },
    {
        id: "aad0014f-d023-4f09-999a-164256ea7bf5",
        title: "AGP Lesotho maximize",
        description:
            "Ut debitis minus. Soluta nisi qui nulla. Architecto autem sequi. Tenetur fugit facere neque. Animi illum quos eum omnis ut nemo consequatur. Architecto at illum ut voluptatem.",
        genre: "Thriller",
        author: "Trevion Reinger",
        year_published: "2008-11-06T16:33:32.254Z",
        available: false,
        last_borrower: null
    },
    {
        id: "abc56c35-9105-4997-9864-8d36634d2056",
        title: "Rubber Elegant Bespoke",
        description:
            "Error et atque iure consequatur aliquam non non quis. Aut porro non cumque at et ut quo. Totam eius adipisci. Libero eos rerum quos animi quia. Qui quidem quibusdam dolore at fugit rerum. Maxime ut porro.",
        genre: "Sci-Fi",
        author: "Maida Oberbrunner",
        year_published: "2003-02-01T19:52:15.136Z",
        available: true,
        last_borrower: null
    },
    {
        id: "9980fa28-a787-4194-88ae-220e0a8d3ab6",
        title: "invoice azure neural",
        description:
            "Minus sed assumenda officia. Qui sapiente debitis quia et fugiat veniam odio. Eveniet sequi vel ullam autem.",
        genre: "Historic Fiction",
        author: "Jordon Strosin",
        year_published: "2013-08-09T12:29:19.349Z",
        available: true,
        last_borrower: null
    },
    {
        id: "83f0b39d-9acf-4de4-8a33-824a3a30e133",
        title: "Key system Buckinghamshire",
        description:
            "Ut quia ipsam incidunt provident minus. Architecto cupiditate labore error inventore illum et. Sed nihil quod quod voluptatem at. Dolorem minima at occaecati sed quia. Ex qui dicta in. Quia et in.",
        genre: "Literary Fiction",
        author: "Tressie Jacobson",
        year_published: "2013-12-16T18:16:06.149Z",
        available: true,
        last_borrower: null
    },
    {
        id: "99c4c55b-14c2-4f47-97e7-2d1ec2e72bae",
        title: "Oriental Music empowering",
        description:
            "Minus qui praesentium. Et sed id labore et omnis odit vel perspiciatis. Deleniti in eius ut est. Odit ea soluta magni.",
        genre: "Comics",
        author: "Dale Boyle",
        year_published: "2010-08-29T17:51:29.103Z",
        available: false,
        last_borrower: null
    },
    {
        id: "90cdec8c-1978-49b9-ae9b-da1b1fe425fc",
        title: "Rubber compress Administrator",
        description:
            "Dolore ullam sit praesentium voluptates. Non non sit maxime in aut qui. In repudiandae consequatur velit vero voluptatibus autem. Odio tenetur ut alias pariatur et vero eos. Corrupti molestiae eveniet esse facere quis.",
        genre: "Romance",
        author: "Matilda Emmerich",
        year_published: "2021-08-24T14:07:14.102Z",
        available: true,
        last_borrower: null
    },
    {
        id: "b168450e-6023-4044-b197-d90b11b9da88",
        title: "Fantastic Steel Granite",
        description:
            "Voluptatum enim facere nulla sunt quia voluptatibus consequuntur. Molestiae enim maiores atque soluta. Sunt illo magnam aperiam qui iure eligendi sint quis. Quo at amet eum aut voluptas incidunt et. A maxime voluptatem dolorem. Quos nostrum mollitia voluptates dolore quo.",
        genre: "Biography",
        author: "Meagan Watsica",
        year_published: "2000-04-20T08:02:30.823Z",
        available: false,
        last_borrower: null
    },
    {
        id: "6897ee13-2655-4aac-9343-f57115fd3749",
        title: "Won Minnesota Ville",
        description:
            "Facilis rerum sed repellat corrupti sunt provident consectetur eum. Et hic quia totam autem. Nulla nesciunt aliquam aut facere consectetur similique nobis. Et aperiam et quae id sed. Doloremque quaerat quaerat doloribus amet sunt officia. Sit quasi debitis commodi dicta.",
        genre: "Thriller",
        author: "Ari Padberg",
        year_published: "2002-11-14T22:15:01.723Z",
        available: true,
        last_borrower: null
    },
    {
        id: "44660925-56b1-485c-b84b-6b5d27c47d93",
        title: "Colorado Causeway Knoll",
        description:
            "Asperiores vel quisquam. Non sit repellendus nesciunt consectetur officia voluptatem tempore porro. Harum earum debitis at enim. Excepturi velit in aut et enim magni.",
        genre: "Fantasy",
        author: "Shawna Jast",
        year_published: "2021-09-04T21:57:09.143Z",
        available: false,
        last_borrower: null
    },
    {
        id: "fe572a05-4f6a-4a51-a261-2a9a9fab0155",
        title: "deploy Licensed intangible",
        description:
            "Sint voluptas ad. Quas et aliquid. Perspiciatis quae ipsa alias officia eligendi praesentium quos eius.",
        genre: "Fantasy",
        author: "Ervin Hoeger",
        year_published: "2010-06-07T06:03:50.884Z",
        available: true,
        last_borrower: null
    },
    {
        id: "e928f3e4-e281-4039-a9b4-9ecb97a67cbf",
        title: "wireless Credit Tuna",
        description:
            "Delectus sapiente aut consequatur reiciendis omnis voluptate non consequuntur. Distinctio in quibusdam. Quia ullam et atque.",
        genre: "Historic Fiction",
        author: "Dejah Lemke",
        year_published: "2006-12-07T13:51:53.348Z",
        available: true,
        last_borrower: null
    },
    {
        id: "b444cfdd-da8e-47d8-8c55-e6598af26250",
        title: "capacitor Future circuit",
        description:
            "Voluptatem fuga eaque recusandae voluptatum debitis illum. Dolorum fugit voluptatum corrupti est ad ut ut. Fuga est ex. In eveniet at repellat aliquid.",
        genre: "Fantasy",
        author: "Rudolph Hamill",
        year_published: "2011-02-22T22:12:20.966Z",
        available: false,
        last_borrower: null
    },
    {
        id: "1634b5da-769b-4c6c-806a-da17f336ee93",
        title: "Berkshire migration payment",
        description:
            "Dolorum labore ipsa eos earum vero. Consectetur atque sed quidem qui omnis quod omnis. Quas consequatur cumque.",
        genre: "Thriller",
        author: "Ladarius Schuster",
        year_published: "2000-01-26T13:58:09.407Z",
        available: true,
        last_borrower: null
    },
    {
        id: "6de83c82-855e-42ca-9d8a-b2b2c601b063",
        title: "circuit microchip Bedfordshire",
        description:
            "Accusamus ut cum quae consectetur facere autem asperiores. Voluptatibus minus ipsum corporis velit architecto et voluptas. Laboriosam adipisci enim reiciendis. Vel sed quae a.",
        genre: "Mystery",
        author: "Uriah Lang",
        year_published: "2000-06-28T14:38:21.545Z",
        available: true,
        last_borrower: null
    },
    {
        id: "0f8b5225-1d7c-4050-bed6-e9333d2cb608",
        title: "Shirt redundant Infrastructure",
        description:
            "Voluptatem omnis sunt. Hic esse qui in sit laudantium dolores quas. Sunt ad debitis adipisci accusamus quisquam quaerat est. Iure eius corrupti.",
        author: "Karina Mann",
        year_published: "2006-11-29T17:15:38.724Z",
        available: true,
        last_borrower: null
    },
    {
        id: "bd7f9bb9-1c5c-4f7f-ade2-c6b5a6057421",
        title: "matrix Marketing Gloves",
        description:
            "Adipisci minus autem. Dolores aut ipsum veniam facere ad asperiores. Deserunt distinctio qui enim libero ducimus omnis est quia. Soluta ex omnis deleniti nulla dolorum ut autem suscipit nesciunt. Natus et voluptates assumenda eius voluptatem.",
        author: "Antonietta Kuhic",
        year_published: "2000-08-21T05:33:36.323Z",
        available: true,
        last_borrower: null
    },
    {
        id: "7b2b1688-36f3-4d5b-8ca5-e7f89f25fea5",
        title: "Computer architect bypassing",
        description:
            "Sit perspiciatis ut. Rerum omnis ut et. Excepturi id harum magnam culpa corrupti nobis est. Voluptatem fugiat nulla non ipsum soluta dolores sapiente omnis qui.",
        genre: "Thriller",
        author: "Adriel Friesen",
        year_published: "2001-07-07T07:29:51.477Z",
        available: true,
        last_borrower: null
    },
    {
        id: "61464413-7ece-4cf7-8bc6-f7fac0f480b4",
        title: "withdrawal regional Dollar",
        description:
            "Labore est quia ullam reiciendis omnis voluptates nostrum qui beatae. Id enim sed dolor expedita qui adipisci. Minima totam est ut perferendis fuga reiciendis est quasi accusamus.",
        genre: "Classic",
        author: "Alize Lemke",
        year_published: "2005-11-08T18:58:21.225Z",
        available: false,
        last_borrower: null
    },
    {
        id: "b2447946-4af8-40e4-9e9d-7e85a9e00232",
        title: "Market archive repurpose",
        description:
            "Excepturi molestiae illum voluptas rerum est. Et aut at et. Ad iure aut minus amet quia rerum quis non. Et quia cum in asperiores cupiditate eum nam. Sint molestias totam impedit. Et sunt sunt saepe itaque.",
        genre: "Literary Fiction",
        author: "Carmela Simonis",
        year_published: "2015-08-22T04:38:46.297Z",
        available: true,
        last_borrower: null
    },
    {
        id: "4bd6ce5a-01f9-4659-92cc-4d2b14762da0",
        title: "Dynamic transform navigating",
        description:
            "Non odit impedit a consequatur autem. Sunt nesciunt ut nostrum. Corrupti hic tempora voluptate voluptatum eligendi et sunt. Amet quod quam ad quae aut quibusdam sit quia.",
        genre: "Action/Adventure",
        author: "Edmond Wisozk",
        year_published: "2021-07-23T05:05:06.359Z",
        available: true,
        last_borrower: null
    },
    {
        id: "3d3231db-91d9-4f77-8766-e1998a93a675",
        title: "Directives Versatile Strategist",
        description:
            "Rerum et unde labore rem expedita. Minima exercitationem sapiente est repellat animi asperiores itaque. Dolores dolorem vitae omnis expedita quidem dolores iure ut.",
        genre: "Biography",
        author: "Denis Skiles",
        year_published: "2019-10-27T03:20:29.560Z",
        available: true,
        last_borrower: null
    },
    {
        id: "c1316c04-dac8-4cf8-963e-84d87b8447e7",
        title: "Antillian Granite web",
        description:
            "Voluptatum vel impedit quod animi incidunt consectetur aut rerum. Provident quia nemo dolorem neque ipsam. Eveniet id sint nostrum totam natus aut debitis tempore. Minima recusandae libero laborum.",
        genre: "Poetry",
        author: "Matilda Koch",
        year_published: "2017-11-28T21:04:42.750Z",
        available: false,
        last_borrower: null
    },
    {
        id: "d0fabc1e-2024-4e87-8c27-7c1999ab2101",
        title: "bus yellow schemas",
        description:
            "Aut sed labore quia eligendi deserunt libero. Sunt unde in ut magnam doloribus perferendis odio iusto molestiae. Vel dolor iste est voluptas consequatur sequi sit alias. Quod eveniet illum vel et eius repellat illum. Odio sunt fugiat et commodi omnis enim quos molestiae.",
        genre: "Historic Fiction",
        author: "Jon Ebert",
        year_published: "2012-09-24T04:05:45.745Z",
        available: true,
        last_borrower: null
    },
    {
        id: "782b922d-5dc6-4d68-bb7a-85f2629dea6e",
        title: "Soap partnerships Zealand",
        description:
            "Quia voluptas impedit dolore sit asperiores possimus quis. Aspernatur autem beatae. Odio voluptatem ipsa aut omnis eveniet.",
        genre: "Thriller",
        author: "Aaliyah Rempel",
        year_published: "2012-10-05T17:40:52.894Z",
        available: false,
        last_borrower: null
    },
    {
        id: "7e9b0e42-79ae-4b6c-8312-2e2f9a42135d",
        title: "Gloves iterate Avon",
        description:
            "Et sit consectetur optio magni quae hic recusandae. Eveniet sapiente odit non perferendis beatae suscipit eum. Quis quo odio exercitationem consequuntur ut possimus quia odio. Officia qui quisquam eligendi quia fuga neque.",
        genre: "Classic",
        author: "Katherine Ratke",
        year_published: "2008-07-26T00:54:22.277Z",
        available: false,
        last_borrower: null
    },
    {
        id: "c835a540-e031-4c06-b1d7-927c824caec9",
        title: "Ergonomic Mouse Cambridgeshire",
        description:
            "Porro at necessitatibus repellat omnis quam voluptatem. Veritatis eius aspernatur omnis similique in. Qui sit consequatur. Neque vitae consequatur omnis et. Aperiam sequi totam officiis sit provident voluptate vero quia velit. In est ut repellendus dolores dolorem quae accusantium placeat.",
        genre: "Horror",
        author: "Aida Schmeler",
        year_published: "2005-06-09T20:37:45.390Z",
        available: true,
        last_borrower: null
    },
    {
        id: "901e5ee6-be82-4d0a-b101-b8f4ef2dfbcd",
        title: "Pants Tugrik Avon",
        description:
            "Quod cumque neque voluptas recusandae ad ut pariatur totam. Quo voluptatem dolorum voluptas unde ad. Possimus nemo id. Dicta qui quis sed et autem. Labore blanditiis ea magni maxime ut autem aperiam.",
        genre: "Classic",
        author: "Chaz Becker",
        year_published: "2003-06-29T19:54:14.319Z",
        available: false,
        last_borrower: null
    },
    {
        id: "10a27662-3eda-427e-974f-3a5a0caf2197",
        title: "morph Georgia XSS",
        description:
            "Iusto id officiis et asperiores error nesciunt. Corrupti ipsa blanditiis dolore dolorem aut nisi est est qui. Est saepe aut. Pariatur aut quas qui. Nemo inventore mollitia fuga necessitatibus. Mollitia omnis ut recusandae enim quis cupiditate.",
        genre: "Classic",
        author: "Gaetano Yost",
        year_published: "2013-01-14T17:17:19.141Z",
        available: true,
        last_borrower: null
    },
    {
        id: "2e9a34f4-b457-4470-97d5-617f4f2a7fae",
        title: "XSS B2C Square",
        description:
            "Officiis quo non dolores enim similique. Assumenda ut ea sed laboriosam voluptatum molestiae. Consequatur optio reprehenderit culpa recusandae repellat id. Maiores dolorem architecto tenetur qui mollitia fugit ipsam ullam. Autem aut est quaerat aut.",
        genre: "Sci-Fi",
        author: "Cleo Lemke",
        year_published: "2013-11-25T12:17:51.159Z",
        available: false,
        last_borrower: null
    },
    {
        id: "a3b3d88a-6c3c-41d6-95e4-58957389f6e4",
        title: "Vanuatu Account Berkshire",
        description:
            "Facere fuga voluptatibus sint et et. Ullam distinctio possimus et omnis atque cumque dolor sapiente. Qui rerum laboriosam sunt consequatur consequatur aperiam voluptatem fugiat. Rerum quasi ea quis corrupti nesciunt omnis porro blanditiis. Consectetur omnis mollitia quas assumenda adipisci voluptatum.",
        genre: "Romance",
        author: "Germaine Gusikowski",
        year_published: "2005-07-13T15:31:15.847Z",
        available: true,
        last_borrower: null
    },
    {
        id: "cf153150-878c-4212-8bc1-12d1e9bf75b3",
        title: "Virginia algorithm haptic",
        description:
            "Dolorem ut consequuntur expedita. Sequi autem dolor ea dolorum nostrum laboriosam est modi quis. Reprehenderit necessitatibus fugiat temporibus dolorum ut impedit repellat. Quis dolorum est ut ex.",
        author: "Christa Kuhic",
        year_published: "2000-07-23T16:12:10.369Z",
        available: true,
        last_borrower: null
    },
    {
        id: "6b864cdf-fb94-4dc0-a1c0-7b77eaebb83d",
        title: "Shoes infomediaries synthesize",
        description:
            "Qui doloribus est non porro accusamus est. Sapiente omnis doloribus odit aliquid incidunt. Consequuntur eveniet consequuntur.",
        genre: "Sci-Fi",
        author: "Baby Kovacek",
        year_published: "2021-02-02T09:50:55.796Z",
        available: false,
        last_borrower: null
    },
    {
        id: "0d80f109-1c54-46d6-8b4c-947a03439ab0",
        title: "Metal green EXE",
        description:
            "Laudantium et perspiciatis earum ad omnis. Nisi in dolorum quod velit. Tempore ut ut. Iusto ipsum eos dignissimos non quo vitae consequatur dolorem. Et quia omnis occaecati voluptatem id maxime dolores temporibus.",
        genre: "Sci-Fi",
        author: "Norwood Hettinger",
        year_published: "2019-04-04T00:52:22.329Z",
        available: false,
        last_borrower: null
    },
    {
        id: "f6e81046-4d16-42e6-86f8-3233bf82109a",
        title: "JSON capacitor syndicate",
        description:
            "Iusto ratione voluptatem. Ut vitae et autem autem nulla sit qui eum facilis. Voluptatem deserunt eos blanditiis reiciendis nemo sed officia est sequi. Eaque est sed commodi et nemo. Totam distinctio atque sunt quis repellat.",
        genre: "Fantasy",
        author: "Trent Abshire",
        year_published: "2017-09-19T16:41:32.137Z",
        available: true,
        last_borrower: null
    },
    {
        id: "262902c0-e79a-4a7c-9cfe-bf50b5bf2e58",
        title: "pixel Electronics AI",
        description:
            "Ducimus dolorum ipsa consequatur qui nemo non. Debitis molestiae sit qui sint officiis eveniet vel deserunt. Repellat consequatur molestiae. Aperiam quis dolor harum aliquam.",
        genre: "Biography",
        author: "Rylee Jacobs",
        year_published: "2020-07-09T17:51:18.173Z",
        available: true,
        last_borrower: null
    },
    {
        id: "cb83901b-58ab-479a-a1c9-517fd91adccb",
        title: "Car invoice Awesome",
        description:
            "Eveniet sed quibusdam natus sint dolores. Voluptatem nostrum dolor eveniet sed enim omnis voluptate. Natus culpa ut omnis ad maiores. Cum accusamus sed esse dolorum. Dolorem repellendus officia placeat quis qui dicta.",
        genre: "Romance",
        author: "Magnolia D'Amore",
        year_published: "2005-09-16T21:58:16.863Z",
        available: false,
        last_borrower: null
    },
    {
        id: "0af31eca-7436-4c90-871f-b1a4c5fcd829",
        title: "Dollar Quality Rial",
        description:
            "Adipisci unde quo omnis deleniti molestiae excepturi totam. At ex voluptatum sequi nesciunt est sint minima sint. Deserunt ad explicabo autem laudantium fuga consectetur aspernatur fugit ullam. Impedit quo et dolor ab.",
        genre: "Literary Fiction",
        author: "Duncan Ankunding",
        year_published: "2008-11-04T22:50:31.852Z",
        available: true,
        last_borrower: null
    },
    {
        id: "7a7004b6-5a47-4788-be20-ebe639f8b8f5",
        title: "bypassing compress Streamlined",
        description:
            "Commodi eos similique nemo earum itaque autem voluptatem. Voluptatem vel rerum voluptate non non quaerat animi a et. Numquam impedit qui atque qui. Quasi quibusdam molestias itaque non asperiores.",
        author: "Luigi Brakus",
        year_published: "2008-03-25T15:20:07.492Z",
        available: true,
        last_borrower: null
    },
    {
        id: "4e6c8c95-ef7b-4059-949c-7ea735c31564",
        title: "Mills reintermediate engineer",
        description:
            "Molestiae quae distinctio voluptas ad eius recusandae. Animi sit voluptatem dolorem aut dicta veritatis. Voluptas ullam sed eligendi laboriosam minus cupiditate perspiciatis. Pariatur tempora non dolores placeat culpa odit modi et.",
        genre: "Comics",
        author: "Mekhi Senger",
        year_published: "2001-03-20T16:16:43.925Z",
        available: true,
        last_borrower: null
    },
    {
        id: "5a5a8419-2863-4a32-a390-68c0b07675e7",
        title: "Engineer policy programming",
        description:
            "Aperiam ipsa vero autem ipsa beatae voluptatem laborum quibusdam nostrum. Natus voluptates dicta similique dolorem doloribus placeat cumque nihil. Quisquam animi consequatur dignissimos perferendis et.",
        genre: "Classic",
        author: "Alessandra DuBuque",
        year_published: "2009-09-22T20:29:41.942Z",
        available: true,
        last_borrower: null
    },
    {
        id: "43c7fadc-55e1-4c2a-95fa-1459b8d3b58b",
        title: "Forward Buckinghamshire program",
        description:
            "Unde voluptates explicabo voluptatibus ipsum sequi magnam tenetur. Repellendus explicabo vero ipsum aliquam autem perferendis in earum. Dolore assumenda porro nostrum et optio ex maiores dolor.",
        genre: "Horror",
        author: "Muriel Reynolds",
        year_published: "2019-08-07T10:45:05.359Z",
        available: false,
        last_borrower: null
    },
    {
        id: "9c550308-e377-40b8-b6fe-46eb95322e2e",
        title: "card Forges Dynamic",
        description:
            "Qui omnis omnis sit. Quia similique libero illum. Unde dolorem quia harum quo quod a qui eos. Unde voluptas voluptas qui distinctio unde. Rem expedita vel nemo sed fugit.",
        genre: "Fantasy",
        author: "Marquise Labadie",
        year_published: "2021-11-21T06:25:19.250Z",
        available: true,
        last_borrower: null
    },
    {
        id: "0b065b13-d6c6-4509-abfb-256709620bdd",
        title: "Kroon Chad Tuna",
        description:
            "Earum placeat veritatis qui vero sequi quia accusamus enim. Ut saepe qui iste neque veniam molestiae dolores ut et. Ipsa et numquam vel aut. Accusamus omnis iste aut.",
        genre: "Classic",
        author: "Alisha Bogisich",
        year_published: "2013-12-09T02:23:45.942Z",
        available: true,
        last_borrower: null
    },
    {
        id: "d2d9df46-5b4f-4769-8cec-52275b5365ef",
        title: "withdrawal Pennsylvania teal",
        description:
            "Porro et minima vel asperiores et delectus et laudantium. Mollitia est sequi est est quas vero. Aut voluptate nulla quaerat fugit enim quaerat placeat.",
        genre: "Horror",
        author: "Bradly Harris",
        year_published: "2007-03-25T08:22:02.504Z",
        available: false,
        last_borrower: null
    },
    {
        id: "a48aa3f9-9fd6-4f73-b979-495050d09074",
        title: "Concrete Ball Mouse",
        description:
            "At accusantium laborum ea in illum. Aspernatur repudiandae consequatur omnis amet nesciunt ducimus est. Cumque similique maxime dolore aut repudiandae. Libero ea qui sunt dicta sed. Alias voluptatum voluptatum accusamus dolorem rerum cum nam repellendus quod. Facere tenetur aut voluptate.",
        genre: "Romance",
        author: "Mercedes Considine",
        year_published: "2006-02-19T04:40:24.381Z",
        available: true,
        last_borrower: null
    },
    {
        id: "99ce5928-9eb4-4622-94f0-97df83fe8ae8",
        title: "calculating feed copying",
        description:
            "Quia ratione est alias consectetur minima mollitia. Nihil id nemo eveniet sit explicabo sint omnis ab. Ducimus placeat qui aut et vel sequi. Omnis provident facilis. Modi illum accusantium amet aut corrupti.",
        genre: "Romance",
        author: "Ethelyn Lowe",
        year_published: "2009-12-27T17:13:32.148Z",
        available: false,
        last_borrower: null
    },
    {
        id: "d5f72128-7564-40a2-b28a-f1403b1fd8b8",
        title: "knowledge Soft Kroon",
        description:
            "Rerum quas illum mollitia consectetur distinctio ut inventore. Sunt enim ipsa asperiores nulla quam et dolore iste pariatur. Eaque assumenda autem ratione minus ab. Amet aut dolor. Est provident omnis cumque enim quos. Facilis expedita quia voluptatem velit aliquid perferendis est voluptatem.",
        genre: "Literary Fiction",
        author: "Arvel Reinger",
        year_published: "2019-12-01T00:56:57.692Z",
        available: false,
        last_borrower: null
    },
    {
        id: "d4730ded-3c8f-481d-ab89-222bc32db990",
        title: "reinvent Gloves Sausages",
        description:
            "Aut animi dolores hic quia. Molestiae nulla qui a alias quam culpa ut quis. Eligendi qui quae ad corporis culpa iusto aut porro cum. Quis aliquam aut quis quo quia ipsa ut sed. Quo cumque sunt ut ut voluptatem ad voluptatem eaque. Laborum quis ea et minus optio molestiae in magni.",
        genre: "Literary Fiction",
        author: "Kylie Altenwerth",
        year_published: "2005-09-17T00:33:23.926Z",
        available: false,
        last_borrower: null
    },
    {
        id: "62631c18-3992-4bdd-b114-381a3ba03321",
        title: "mobile Electronics Beauty",
        description:
            "Voluptatibus voluptatem et praesentium libero. Voluptas sit beatae labore cum omnis illo est veniam quos. Et minus sed at expedita omnis a. Mollitia repellat rerum officiis aut. Est temporibus repellat.",
        genre: "Classic",
        author: "Edmond Gerlach",
        year_published: "2006-05-10T16:52:21.139Z",
        available: true,
        last_borrower: null
    },
    {
        id: "4c1d7f0c-629e-4815-a4f4-e5b2cc59e4ca",
        title: "Usability invoice Avon",
        description:
            "Odit et perferendis id dignissimos accusamus ducimus error omnis adipisci. Cupiditate ipsa voluptatum reiciendis qui corrupti aliquid deserunt. Quis molestiae consequatur et et nostrum exercitationem voluptates et. Est quae et dignissimos quia doloribus vel odio recusandae rerum. Ipsum nobis vel aut culpa voluptas. Laudantium sed eaque laboriosam tenetur qui modi eligendi est.",
        genre: "Thriller",
        author: "Tressa Dibbert",
        year_published: "2003-06-16T07:24:25.024Z",
        available: true,
        last_borrower: null
    },
    {
        id: "245a61bc-32d4-4534-9dbb-c15f0f44d339",
        title: "connect Books Garden",
        description:
            "Ut sed deleniti ducimus repellendus. Id quo est quia natus eum ea minus eos. Odit unde et ex. Exercitationem similique voluptas quis rerum ipsum laborum et et.",
        genre: "Sci-Fi",
        author: "Jadyn Padberg",
        year_published: "2016-02-02T09:25:28.709Z",
        available: false,
        last_borrower: null
    },
    {
        id: "fd84340f-b101-46e4-a759-070f8014e1a9",
        title: "compress Ethiopian Small",
        description:
            "Temporibus maiores rerum impedit mollitia dolores. Velit inventore dicta ut. Necessitatibus odio aut labore. Fugiat consectetur quo repudiandae nisi. Quasi sed vero reprehenderit.",
        genre: "Comics",
        author: "Burnice McLaughlin",
        year_published: "2012-12-17T00:45:06.921Z",
        available: false,
        last_borrower: null
    },
    {
        id: "967b45d4-669a-4587-8e70-028d1f9cf2e8",
        title: "Camp Nicaragua and",
        description:
            "Molestiae consectetur perferendis nulla perferendis reiciendis dolorem consequuntur veniam. Blanditiis veniam vel et officia eaque exercitationem maiores doloremque. Ea vero dignissimos repellat fugit quibusdam cupiditate pariatur. Soluta et tenetur minima cumque quae. Nesciunt ut id ab dolor pariatur placeat architecto dolores. Esse molestiae quos vel at ut velit in.",
        genre: "Historic Fiction",
        author: "Al Connelly",
        year_published: "2002-09-04T18:27:09.754Z",
        available: false,
        last_borrower: null
    },
    {
        id: "e1cd2629-a7b8-4d6c-abd2-c0a5cc171c67",
        title: "Alabama aggregate Zimbabwe",
        description:
            "Quia eaque quia reprehenderit. Qui sint delectus et et dolorum id pariatur. Nam temporibus quasi et.",
        genre: "Horror",
        author: "Evans Herman",
        year_published: "2014-09-04T21:17:28.113Z",
        available: true,
        last_borrower: null
    },
    {
        id: "e590be90-04e4-4350-8619-c102a9c5dd46",
        title: "Dakota Quetzal Buckinghamshire",
        description:
            "Ut natus inventore cupiditate quo perspiciatis ea enim ea. Quo perferendis ad non amet occaecati. Eaque excepturi cumque omnis iusto incidunt rerum ullam.",
        genre: "Sci-Fi",
        author: "Albin Runolfsson",
        year_published: "2013-04-08T03:44:07.334Z",
        available: false,
        last_borrower: null
    },
    {
        id: "9a836c4a-6adf-49ea-9290-a45677cb6b71",
        title: "internet withdrawal magenta",
        description:
            "Reiciendis quas sint. Molestiae ut repellendus ut. Molestiae harum exercitationem dolor. Et qui sit saepe consequatur dignissimos quos. Enim perferendis fugit aut quod labore deserunt voluptatibus sunt. Quia iusto ipsa sunt.",
        genre: "Romance",
        author: "Laurie Tromp",
        year_published: "2006-07-26T21:45:45.587Z",
        available: true,
        last_borrower: null
    },
    {
        id: "f05e1af7-4af7-415b-b056-90c610e06edd",
        title: "Hong Course Liaison",
        description:
            "Dolore necessitatibus error. Quia earum officia sapiente ut molestias illum. Aspernatur in omnis. Sed provident autem.",
        genre: "Literary Fiction",
        author: "Thomas Schumm",
        year_published: "2015-08-27T17:34:32.109Z",
        available: true,
        last_borrower: null
    },
    {
        id: "50770e94-64d0-4e19-b8a3-f0856b0031de",
        title: "Cheese Fuerte THX",
        description:
            "Harum qui veritatis omnis ut. Sapiente quam laudantium voluptatem omnis dolores corrupti quia. Minus aut qui optio ut dolores nihil fugit esse eos.",
        genre: "Sci-Fi",
        author: "Heaven Kohler",
        year_published: "2015-10-20T19:22:42.618Z",
        available: false,
        last_borrower: null
    },
    {
        id: "5c06a015-c30f-4ff2-bccf-303266959d7a",
        title: "Brooks Curve Borders",
        description:
            "Nemo quod quasi deserunt corrupti eos quia. Laborum soluta quibusdam. Eaque atque dolorem ducimus sunt suscipit vitae et ratione. Et et quibusdam soluta numquam.",
        genre: "Thriller",
        author: "Jaunita Ziemann",
        year_published: "2007-03-24T13:17:28.135Z",
        available: true,
        last_borrower: null
    },
    {
        id: "18edb98f-3455-46b4-8a24-b1b249470ab3",
        title: "strategic copy Account",
        description:
            "Sed error asperiores sunt repellendus. Facilis sunt dolorum ut voluptas fugiat corporis. Et id consequatur eligendi quod rerum delectus mollitia. Sed aut provident officia quis consectetur et sunt quis ut. Quod culpa odit quod non. Eligendi quisquam culpa voluptate laborum accusantium.",
        author: "Adonis Wyman",
        year_published: "2012-08-10T20:20:35.531Z",
        available: true,
        last_borrower: null
    },
    {
        id: "cbc416c8-f94f-47ea-ba46-1fda30a3d246",
        title: "Soft Games Mauritania",
        description:
            "Fugit placeat omnis minus libero qui. Velit voluptates nihil ducimus. Qui odit deleniti et. Qui quos officia et autem et magnam. Rerum quis modi. Nobis quo officia.",
        genre: "Literary Fiction",
        author: "Justice Ebert",
        year_published: "2012-10-18T04:50:01.348Z",
        available: true,
        last_borrower: null
    },
    {
        id: "7120dd4e-62bb-4544-8bbf-19bf30a44b01",
        title: "Mouse navigating reciprocal",
        description:
            "Qui cum aliquam mollitia blanditiis maiores officiis. Illum est illo repudiandae voluptatem praesentium. Quia tempore cum quos. Deleniti asperiores sed tempora. Cupiditate error molestiae perspiciatis quo. Nobis voluptas rerum repudiandae sed vel.",
        genre: "Action/Adventure",
        author: "Jeromy Rutherford",
        year_published: "2001-02-15T10:23:36.210Z",
        available: false,
        last_borrower: null
    },
    {
        id: "be851a84-98e7-40e1-aab8-6d4463214b38",
        title: "Officer New Polarised",
        description:
            "Pariatur et facilis et. Voluptatem sequi sit repellat quae neque qui. Quidem explicabo quas fuga omnis sit. Qui veniam culpa vitae rerum nobis et consequuntur doloribus. Sunt ullam suscipit suscipit et voluptatem. Sed ab autem.",
        genre: "Comics",
        author: "Kraig Haag",
        year_published: "2010-09-08T06:50:37.104Z",
        available: false,
        last_borrower: null
    },
    {
        id: "d6802e1f-b7cb-4501-8315-8cb1f36eefc7",
        title: "Lesotho Keyboard Carolina",
        description:
            "Tempore quis et quibusdam pariatur. Ut enim debitis consequatur aliquid sint id explicabo ullam quisquam. Minus et non est cumque excepturi incidunt doloribus. Unde et mollitia minima possimus.",
        genre: "Horror",
        author: "Lane Cartwright",
        year_published: "2007-09-06T12:44:34.722Z",
        available: true,
        last_borrower: null
    },
    {
        id: "137d1fa8-657b-4a30-a320-3b130825d510",
        title: "Infrastructure Lilangeni capacity",
        description:
            "Magnam adipisci aut dolore. Accusamus inventore et ut repudiandae ab est vel delectus. Et rerum natus qui error hic. Nostrum nihil repellat in similique quo. Illum suscipit autem omnis molestiae. Ea dignissimos dolores impedit voluptatem beatae quis omnis sit ut.",
        genre: "Fantasy",
        author: "Victoria Schulist",
        year_published: "2013-03-04T06:35:58.375Z",
        available: false,
        last_borrower: null
    },
    {
        id: "d0279091-a21d-4626-92c5-9b2aeb8dc7c1",
        title: "portals markets Chair",
        description:
            "Consequuntur voluptatem vel est placeat dolore aliquam tenetur incidunt. Repudiandae numquam voluptate ipsam repellendus laudantium et enim ut assumenda. Voluptatibus architecto veritatis tempore sunt eum omnis aut totam debitis. Autem voluptas consequatur eveniet culpa doloribus soluta.",
        genre: "Historic Fiction",
        author: "Destin Hermiston",
        year_published: "2015-01-05T05:21:41.622Z",
        available: true,
        last_borrower: null
    },
    {
        id: "a0674c18-21b5-422f-aa3a-fdbf39c124da",
        title: "lime solutions implement",
        description:
            "Ut omnis et totam voluptate. Deserunt et consequatur porro esse asperiores. At laudantium eos quia. Facere consectetur quae non corrupti quasi ut. Explicabo voluptatibus doloribus impedit quae fuga earum. Est similique enim dolor nobis.",
        genre: "Comics",
        author: "Arnold Olson",
        year_published: "2003-08-22T03:04:22.132Z",
        available: true,
        last_borrower: null
    },
    {
        id: "116919fd-cd8c-4b4f-bd59-283bc82fc643",
        title: "Checking Plastic Internal",
        description:
            "Ab magni sit nesciunt non quo. Amet repudiandae nemo sequi. Explicabo eligendi tempora nemo amet cupiditate quidem. Quia iure quod id labore totam.",
        genre: "Classic",
        author: "Evie Oberbrunner",
        year_published: "2011-02-07T22:35:52.268Z",
        available: true,
        last_borrower: null
    },
    {
        id: "4bef8059-0321-40a6-a1fa-e33aee9c8be9",
        title: "Paraguay SDD Soap",
        description:
            "Error iusto voluptatibus ut. Odio alias odio in autem. Quis in quia hic quaerat sed. Molestiae eligendi esse voluptatibus natus error placeat.",
        genre: "Historic Fiction",
        author: "Ignacio Williamson",
        year_published: "2018-10-05T15:56:37.024Z",
        available: false,
        last_borrower: null
    },
    {
        id: "d2d38f60-9111-4fa5-92f4-75ab3409eb6e",
        title: "Sausages deliverables Manors",
        description:
            "Laboriosam porro autem nam. Officiis optio nostrum alias consequuntur iure temporibus. Quasi alias temporibus voluptate eum delectus sapiente sequi. Qui qui et error nesciunt reiciendis sint qui qui vel.",
        genre: "Romance",
        author: "Sonia Ortiz",
        year_published: "2012-03-13T18:11:44.196Z",
        available: true,
        last_borrower: null
    },
    {
        id: "e64aac78-51e4-4714-ab1d-5544dc5df6de",
        title: "Officer XML Forward",
        description:
            "Deleniti vitae totam labore. Error fugit sunt ut tempore officiis vero provident. Ut perspiciatis voluptas nostrum incidunt voluptate et occaecati enim iusto. Pariatur aperiam qui iste ut quaerat dolore et labore inventore. Assumenda rerum vel et modi eos quam corporis voluptatibus. Vel libero quasi.",
        genre: "Romance",
        author: "Reynold Stoltenberg",
        year_published: "2005-04-09T14:39:23.713Z",
        available: false,
        last_borrower: null
    },
    {
        id: "6f076967-4fcd-49b8-bc77-fdd546e5d248",
        title: "Games Persevering Mississippi",
        description:
            "Rem soluta laborum. Ut similique ut ad labore. Provident sint alias excepturi voluptatem dicta sed. Est consequatur quod.",
        author: "Hassie Stoltenberg",
        year_published: "2009-02-10T15:20:13.684Z",
        available: true,
        last_borrower: null
    },
    {
        id: "310edd08-e09f-41e3-9a4d-409030ef5c30",
        title: "Fish Buckinghamshire Bacon",
        description:
            "Aut quam quia consequuntur. Ad natus est nulla officiis illo aperiam neque tenetur. Porro itaque suscipit recusandae quae. Nesciunt aut odio.",
        genre: "Romance",
        author: "Nolan Schneider",
        year_published: "2018-10-11T15:11:34.302Z",
        available: true,
        last_borrower: null
    },
    {
        id: "bb24d017-c1c0-4d8b-ae00-e2399c069805",
        title: "Kansas Orchestrator withdrawal",
        description:
            "Nesciunt reiciendis possimus. Consequuntur similique eius sit sit officia deleniti est. Nihil porro quis deserunt velit a asperiores aut. Quae ad nihil est non doloremque laboriosam inventore iusto dolor.",
        genre: "Thriller",
        author: "Dedrick Bogisich",
        year_published: "2015-02-07T23:06:18.516Z",
        available: false,
        last_borrower: null
    },
    {
        id: "c81debe3-f903-4b7c-b744-779d220c7a47",
        title: "invoice Plastic card",
        description:
            "Accusantium odio iure et sed iusto expedita. Dicta sit suscipit dolor eaque praesentium. Possimus molestiae quos amet.",
        genre: "Mystery",
        author: "Federico Wunsch",
        year_published: "2011-05-17T06:58:41.788Z",
        available: true,
        last_borrower: null
    },
    {
        id: "a89fa578-1de5-40d8-94e2-260b8ee71200",
        title: "hard salmon International",
        description:
            "Cupiditate quo autem nihil at dolorem. Rem quisquam praesentium quia. Dicta porro accusantium voluptates est sunt consectetur cumque nam.",
        genre: "Horror",
        author: "Jamie Toy",
        year_published: "2015-01-07T14:53:53.532Z",
        available: false,
        last_borrower: null
    },
    {
        id: "027b4977-c47b-429b-9378-0df33e973716",
        title: "parallelism Hat Web",
        description:
            "Neque sequi at eum repellat deleniti dolor nam. Dolore aut odit beatae laborum. Aliquid sint aliquid nesciunt et reprehenderit aut voluptas sed.",
        genre: "Mystery",
        author: "Kyle Schumm",
        year_published: "2019-06-19T10:57:54.195Z",
        available: true,
        last_borrower: null
    },
    {
        id: "7eabbd8f-70f0-406a-967b-680e03228123",
        title: "Trafficway Central protocol",
        description:
            "Et voluptatem adipisci et incidunt harum reprehenderit asperiores ducimus. Facilis id vel dolorum voluptatum dignissimos. Excepturi similique deserunt aperiam.",
        genre: "Fantasy",
        author: "Estevan Bahringer",
        year_published: "2013-07-17T19:34:22.763Z",
        available: true,
        last_borrower: null
    },
    {
        id: "fb8b3477-7a5d-44e2-b9a5-ca43de3c0cf1",
        title: "Account Franc copy",
        description:
            "Corporis ratione harum quos est consequatur nam. Animi rerum sit praesentium omnis enim pariatur nobis. Id eveniet pariatur iure maxime fugiat placeat accusantium ipsam. Non iusto a vel voluptatem quibusdam itaque ratione. Et quae deserunt iusto rerum libero. Quia vero omnis animi fuga est nam omnis labore repudiandae.",
        genre: "Classic",
        author: "Danial Botsford",
        year_published: "2010-09-19T00:53:56.020Z",
        available: true,
        last_borrower: null
    },
    {
        id: "f745aade-4170-4b93-bfde-fc7c06367254",
        title: "indexing Group Zimbabwe",
        description:
            "Fugiat ratione praesentium amet a amet. Quae quaerat et. Qui aut in minus molestiae vitae at deserunt ut id. Aliquid non earum possimus.",
        genre: "Comics",
        author: "Mario Stanton",
        year_published: "2007-03-04T03:16:11.414Z",
        available: true,
        last_borrower: null
    },
    {
        id: "f844423a-ab77-4ff9-9510-a2614c73126c",
        title: "Electronic Salad Chicken",
        description:
            "Ut quaerat laborum. Est impedit qui dolorum et aut consequatur accusamus assumenda eum. Sapiente harum ad vel molestias dolorem repellat. Tempore atque a esse libero omnis minima molestiae. Pariatur necessitatibus similique maxime soluta. Eos quisquam esse recusandae esse nihil.",
        genre: "Sci-Fi",
        author: "Meaghan Hirthe",
        year_published: "2013-07-17T08:07:10.272Z",
        available: false,
        last_borrower: null
    },
    {
        id: "ae4149b4-46bf-496c-9218-aaf3482ad2b0",
        title: "Garden Developer Mount",
        description:
            "Quisquam veniam id. Neque culpa vero repudiandae ipsa dignissimos praesentium corrupti sunt tempora. Ut beatae illo ut aperiam reprehenderit ut. Voluptatem modi cupiditate velit recusandae nulla impedit.",
        genre: "Horror",
        author: "Frederic Bailey",
        year_published: "2019-12-10T11:54:39.825Z",
        available: true,
        last_borrower: null
    }
];

export default books;
