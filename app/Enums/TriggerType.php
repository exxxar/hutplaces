<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

final class TriggerType extends Enum
{
    const Level = 0;
    const Experience = 1;
    const Discount = 2;
    const Pucks_Count = 3;
    const Coins_Count = 4;
    const Cards_Count = 5;
    const Packs_Opened_Count = 6;
    const Randoms_Played_Count = 7;
    const Win_Wheel_Played_Count = 8;
    const Auction_Bid_Count = 9;
    const Auction_Buy_Count = 10;
    const Bug_Report_Count = 11;
    const Lose_Sequence_Count = 12;
    const Win_Sequence_Count = 13;
    const Achievements_Count = 14;
    const Spent_Money = 15;
    const Promocodes_Count = 16;
    const Items_Count = 17;
    const Bonus_Count = 18;
    const Randoms_Free_Played_Count = 19;
    const Randoms_Win_Count = 20;
}
