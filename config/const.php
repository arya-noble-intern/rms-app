<?php

return [
    'ROLE_ID' => [
        'SUPERADMIN' => 1,
        'PIC' => 2,
        'LEADER' => 3,
        'CANDIDATE' => 4
    ],

    'CARD_STATUSES' => [
        ['id' => 1, 'order' =>  1, 'description' => 'Waiting Talent Suggestion by PIC'],
        ['id' => 2, 'order' =>  2, 'description' => 'Waiting Leader Approval for Talent Suggestion'],
        ['id' => 3, 'order' =>  3, 'description' => 'Waiting Account Creation for Talent by PIC'],
        ['id' => 4, 'order' =>  4, 'description' => 'Waiting Interview Schedule to be Set by PIC'],
        ['id' => 5, 'order' =>  5, 'description' => 'Waiting Approval Schedule by Leader'],
        ['id' => 6, 'order' =>  6, 'description' => 'Waiting Medical Check-Up Schedule to be Set by PIC'],
        ['id' => 7, 'order' =>  7, 'description' => 'Waiting Psychotest Schedule to be Set by PIC'],
        ['id' => 8, 'order' =>  8, 'description' => 'Done'],
    ],

    'CARD_STATUS_ID' => [
        'TALENT_SUGGESTION' => 1,
        'LEADER_APPROVAL_TALENT' => 2,
        'ACCOUNT_CREATION' => 3,
        'INTERVIEW_SCHEDULE' => 4,
        'APPROVAL_SCHEDULE' => 5,
        'MCU_SCHEDULE' => 6,
        'PSYCHOTEST_SCHEDULE' => 7,
        'DONE' => 8
    ]
];
